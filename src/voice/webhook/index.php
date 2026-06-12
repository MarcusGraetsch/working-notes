<?php
$upstream = getenv('VOICE_WEBHOOK_UPSTREAM') ?: 'https://voice.working-notes.org/voice/webhook';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    header('Content-Type: text/plain; charset=utf-8');
    echo "voice webhook relay\n";
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    header('Allow: GET, POST');
    header('Content-Type: text/plain; charset=utf-8');
    echo "method not allowed";
    exit;
}

$body = file_get_contents('php://input');
$headers = function_exists('getallheaders') ? getallheaders() : [];
$forwardHeaders = [];

foreach ($headers as $name => $value) {
    $lower = strtolower($name);
    if (in_array($lower, ['host', 'content-length', 'connection', 'accept-encoding'], true)) {
        continue;
    }
    $forwardHeaders[] = $name . ': ' . $value;
}

$forwardHeaders[] = 'Content-Length: ' . strlen($body);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $forwardHeaders),
        'content' => $body,
        'ignore_errors' => true,
        'timeout' => 15,
    ],
]);

$response = @file_get_contents($upstream, false, $context);

if ($response === false) {
    http_response_code(502);
    header('Content-Type: text/plain; charset=utf-8');
    echo "upstream relay failed";
    exit;
}

$status = 200;
$contentType = 'application/json; charset=utf-8';

if (!empty($http_response_header) && is_array($http_response_header)) {
    foreach ($http_response_header as $line) {
        if (preg_match('/^HTTP\/\S+\s+(\d+)/', $line, $m)) {
            $status = (int) $m[1];
        } elseif (stripos($line, 'Content-Type:') === 0) {
            $contentType = trim(substr($line, strlen('Content-Type:')));
        }
    }
}

http_response_code($status);
header('Content-Type: ' . $contentType);
echo $response;
