#!/bin/bash
# Backup Script für Digital Capitalism Research
# Sync zu Google Drive (aichitchatter@gmail.com)
# Integrated: system manifest + openclaw config backup from engineering/tools/backup.sh

set -e

BACKUP_DIR="/root/.openclaw/workspace/backups"
RESEARCH_DIR="/root/.openclaw/workspace/research"
WORKSPACE="/root/.openclaw/workspace"
OPENCLAW_CONFIG="/root/.openclaw/openclaw.json"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_LOCAL="/root/backups/research-$DATE"

mkdir -p $BACKUP_DIR
mkdir -p $BACKUP_LOCAL

echo "🔄 Starting backup: $DATE"
echo ""

# 0. Ensure Git is up to date
echo "[0/7] Checking Git status..."
cd $WORKSPACE
if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -m "Auto-backup before system backup: $DATE" || true
    echo "   ✅ Committed pending changes"
else
    echo "   ✅ No pending changes"
fi

# 1. Backup SQLite databases
echo "[1/7] Backing up databases..."
sqlite3 $RESEARCH_DIR/articles.db ".backup '$BACKUP_DIR/articles_$DATE.db'"
sqlite3 $RESEARCH_DIR/literature.db ".backup '$BACKUP_DIR/literature_$DATE.db'"
sqlite3 $RESEARCH_DIR/podcasts.db ".backup '$BACKUP_DIR/podcasts_$DATE.db'" 2>/dev/null || true
echo "   ✅ Databases backed up"

# 2. Backup Ontology
echo "[2/7] Backing up ontology..."
tar czf $BACKUP_DIR/ontology_$DATE.tar.gz -C /root/.openclaw/workspace memory/ontology/ 2>/dev/null || true
echo "   ✅ Ontology backed up"

# 3. Backup Configs
echo "[3/7] Backing up configs..."
tar czf $BACKUP_DIR/configs_$DATE.tar.gz \
  -C /root/.openclaw/workspace \
  .env ROADMAP.md TODO.md CLADE-MEM.md \
  2>/dev/null || true
echo "   ✅ Configs backed up"

# 4. Backup OpenClaw config (with API keys)
echo "[4/7] Backing up OpenClaw config..."
if [ -f "$OPENCLAW_CONFIG" ]; then
    cp "$OPENCLAW_CONFIG" "$BACKUP_DIR/openclaw-config-$DATE.json"
    echo "   ✅ openclaw.json backed up"
else
    echo "   ⚠️ WARNING: openclaw.json not found"
fi

# 5. Create system manifest
echo "[5/7] Creating system manifest..."
cat > "$BACKUP_DIR/manifest-$DATE.txt" << EOF
# System Manifest - $DATE
# Generated for disaster recovery

## Git Remote
$(cd $WORKSPACE && git remote -v 2>/dev/null || echo "No remote configured")

## OpenClaw Version
$(openclaw --version 2>/dev/null || echo "Unknown")

## Node Version
$(node --version 2>/dev/null || echo "Not installed")

## Python Version
$(python3 --version 2>/dev/null || echo "Not installed")

## Cron Jobs
$(crontab -l 2>/dev/null || echo "No crontab")

## Backup Source
workspace=$WORKSPACE
backup_dir=$BACKUP_DIR
date=$DATE
EOF
echo "   ✅ Manifest created"

# 6. Create manifest
echo "[6/7] Creating file manifest..."
cat > "$BACKUP_DIR/backup_$DATE.manifest" << EOF
Backup Date: $DATE
Source: /root/.openclaw/workspace
Files:
EOF
ls -lh $BACKUP_DIR/*_$DATE* >> "$BACKUP_DIR/backup_$DATE.manifest" 2>/dev/null
echo "   ✅ File manifest created"

# 7. Sync to Google Drive (if configured)
echo "[7/7] Syncing to Google Drive..."
if rclone listremotes 2>/dev/null | grep -q "gdrive"; then
    rclone sync "$BACKUP_DIR" gdrive:DigitalCapitalismBackups \
        --progress \
        --delete-excluded \
        --exclude "*.log"
    echo "   ✅ Google Drive sync complete"
else
    echo "   ⚠️ Google Drive not configured. Run: rclone config"
    echo "   Backups stored locally in: $BACKUP_DIR"
fi

echo ""
echo "🎉 Backup complete!"
echo "📁 Location: $BACKUP_DIR"
echo "📊 Size: $(du -sh $BACKUP_DIR | cut -f1)"
