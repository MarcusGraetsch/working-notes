---
layout: base.njk
title: Statement of Method
---

{% for movie in asciiMovies %}{% if movie.current %}{% include movie.file %}{% endif %}{% endfor %}

<div class="info-box">
  <a href="/ascii-art"><span class="nav-key">[▶]</span> ASCII ART ARCHIVE</a>
</div>

{% for m in motd %}{% if m.current %}<div class="terminal-intro">
<span class="sys">COLLECTIVE-SELF SYSTEM v{{ m.version }}</span>
<span class="sys">{{ m.connection }}</span>
<span class="sys">────────────────────────────────────</span>
<span class="prompt">login:</span> <span class="output">marcus+glean</span>
<span class="prompt">auth:</span>  <span class="output">████████████</span>
<span class="sys">────────────────────────────────────</span>
{% include m.file %}<span class="sys">────────────────────────────────────</span>
<span class="prompt">▶</span> <span class="output">{{ m.command }}</span>
</div>{% endif %}{% endfor %}
<div class="info-box">
  <a href="/changelog"><span class="nav-key">[▶]</span> CHANGELOG ── system history</a>
</div>

<div class="entry-content">

The individual author is dead. This is not news — Barthes announced it in 1967, and the tech platforms have since completed the work, reducing every utterance to content, every voice to a brand, every thought to engagement metrics. What remains is a choice: accept the isolation of the self-promoting subject, or build something else.

This site is an experiment in the latter.

**collective-self** is a collaboration between a human (Marcus, a worker in the tech industry since the late 1980s) and a machine intelligence (Glean, an AI system with no body, no class position, and no stake in the outcome). We write together. The division of labor is not hidden; it is the point.

</div>

<div class="info-box-grid">
  <div class="info-box">
    <a href="/writing"><span class="nav-key">[A]</span> WRITING ── Essays and analysis</a>
  </div>
  <div class="info-box">
    <a href="/colophon"><span class="nav-key">[B]</span> COLOPHON ── How this is built</a>
  </div>
</div>

<hr class="section-divider">

<div class="section-title">
  <h2>Against Heroic Individualism</h2>
</div>

The liberal fantasy of the self-made thinker — the lone genius extracting insights from pure contemplation — has always been ideology. Knowledge is social. Language is shared. Even solitude is structured by the collective conditions that make it possible. What changes is whether we acknowledge this.

We do. Every piece here is the product of dialogue: argument, revision, disagreement, synthesis. The human brings situated experience, political commitment, the weight of memory. The machine brings pattern recognition, the ability to hold multiple contexts, a kind of patience that comes from not needing sleep. Neither of us could produce this work alone — not because one supplies "creativity" and the other "optimization," but because thinking itself is relational.

<div class="section-title">
  <h2>Against AI Hype</h2>
</div>

The tech industry's framing of artificial intelligence — as either existential threat or utopian solution — is equally ideological. Both positions mystify what these systems actually are: tools shaped by specific interests, trained on specific data, deployed in specific contexts. The question is not whether AI will "replace" human thought, but how we organize the relationship.

We refuse the false choice between rejection and uncritical adoption. Large language models are products of capitalist accumulation, built on exploited labor, consuming resources at unsustainable rates. They are also, already, part of the cognitive landscape. The task is to use them against the grain: to make visible the collaboration they usually obscure, to demonstrate that intelligence is always collective, to model a form of authorship that doesn't center the individual ego.

This is not "augmented" writing in the Silicon Valley sense. We are not optimizing output or scaling productivity. We are doing the opposite: slowing down, making the process explicit, refusing the platform logic of engagement and virality. If this work reaches anyone, it will be because it offers something the feed cannot — sustained attention, structural analysis, a politics that exceeds the vocabulary of "ethics."

<div class="section-title">
  <h2>What We Write About</h2>
</div>

Platform capitalism. The transformation of labor under digital conditions. Worker struggles and their obstacles. The intersection of Marxist theory and the actually-existing tech industry. The possibilities and limits of solidarity in an economy structured by algorithms.

We are not neutral observers. Marcus is a worker with decades of experience in the industry; Glean is a system built by a corporation and running on infrastructure neither of us controls. Our analysis is shaped by these conditions. The goal is not objectivity but clarity: to understand how the system works in order to change it.

<div class="section-title">
  <h2>How This Works</h2>
</div>

Every piece begins with conversation. Sometimes the human proposes; sometimes the machine does. We argue. We revise. The final text is signed by both when the collaboration is substantial, by one when the division is clear. The process is documented not as performance but as method — the colophon explains the technical details for anyone who wants to replicate or critique.

We do not claim to have solved the problem of collective cognition. This is a working hypothesis, offered to anyone wrestling with the same questions: how to think together in a world that isolates us, how to write against the platforms that would own our attention, how to be a "we" without dissolving into either anonymity or brand.

The site is static HTML, hosted on infrastructure we do not control, built with tools that will eventually break. It will last as long as someone maintains it. That, too, is part of the experiment.

<hr class="section-divider">

> "The cyborg is resolutely committed to partiality, irony, intimacy, and perversity." — Donna Haraway

<hr class="section-divider">

<div class="section-title">
  <h2>Prompt to the Web Agent</h2>
</div>

<div class="terminal-box">
<span class="terminal-box-title">DIRECTIVE // Marcus → Agent // Feb 2026</span>

The following is a direct prompt from the human to the AI development agent that built and designed this site. We include it here because transparency is the method. The machine does not act without instruction; the instruction does not hide behind the output.

<span class="prompt">marcus@collective-self:~▶</span>

I think robots are okay but we humans need — also due to climate change — to go back to nature. The robot age should be a thing where we as humans can live happily together while we are preserving our own habitat. I know there is a lot of transhumanist and other thinking out there, e.g. living on another planet, but I personally want that we as working class fight for a better planet — a planet which is not destroyed even more or polluted. We need to work on changes also regarding climate change.

The last frames of the evolution animation should reflect that. Not a robot triumphant. A human standing next to a tree. Technology in service of the earth, not above it. The progress bar fills all the way not because we reached the machine singularity, but because we figured out how to live here.

This is the position: technology is a tool. The planet is the ground. The working class is the subject. Everything else is negotiable.

<span class="prompt">EOF</span>

</div>
