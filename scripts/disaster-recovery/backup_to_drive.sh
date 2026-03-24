#!/bin/bash
# Backup Script für Digital Capitalism Research
# Sync zu Google Drive (aichitchatter@gmail.com)

BACKUP_DIR="/root/.openclaw/workspace/backups"
RESEARCH_DIR="/root/.openclaw/workspace/research"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

echo "🔄 Starting backup: $DATE"
echo ""

# 1. Backup SQLite databases
echo "📦 Backing up databases..."
sqlite3 $RESEARCH_DIR/articles.db ".backup '$BACKUP_DIR/articles_$DATE.db'"
sqlite3 $RESEARCH_DIR/literature.db ".backup '$BACKUP_DIR/literature_$DATE.db'"
sqlite3 $RESEARCH_DIR/podcasts.db ".backup '$BACKUP_DIR/podcasts_$DATE.db'" 2>/dev/null || true
echo "   ✅ Databases backed up"

# 2. Backup Ontology
echo "🧠 Backing up ontology..."
tar czf $BACKUP_DIR/ontology_$DATE.tar.gz -C /root/.openclaw/workspace memory/ontology/ 2>/dev/null || true
echo "   ✅ Ontology backed up"

# 3. Backup Configs
echo "⚙️  Backing up configs..."
tar czf $BACKUP_DIR/configs_$DATE.tar.gz \
  -C /root/.openclaw/workspace \
  .env ROADMAP.md TODO.md CLADE-MEM.md \
  2>/dev/null || true
echo "   ✅ Configs backed up"

# 4. Create manifest
echo "📋 Creating manifest..."
cat > $BACKUP_DIR/backup_$DATE.manifest << EOF
Backup Date: $DATE
Source: /root/.openclaw/workspace
Files:
EOF
ls -lh $BACKUP_DIR/*_$DATE* >> $BACKUP_DIR/backup_$DATE.manifest
echo "   ✅ Manifest created"

# 5. Sync to Google Drive (if configured)
if rclone listremotes | grep -q "gdrive"; then
    echo "☁️  Syncing to Google Drive..."
    rclone sync $BACKUP_DIR gdrive:DigitalCapitalismBackups \
        --progress \
        --delete-excluded \
        --exclude "*.log"
    echo "   ✅ Google Drive sync complete"
else
    echo "⚠️  Google Drive not configured. Run: rclone config"
    echo "   Backups stored locally in: $BACKUP_DIR"
fi

echo ""
echo "🎉 Backup complete!"
echo "📁 Location: $BACKUP_DIR"
echo "📊 Size: $(du -sh $BACKUP_DIR | cut -f1)"
