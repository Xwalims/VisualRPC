const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'node_modules', 'discord-rpc', 'src', 'client.js');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('type: args.type,')) {
    content = content.replace(
      'details: args.details,\n        timestamps,',
      'details: args.details,\n        type: args.type,\n        timestamps,'
    );
    fs.writeFileSync(file, content);
    console.log('VisualRPC: discord-rpc patched (type field)');
  }
}
