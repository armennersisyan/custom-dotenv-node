const fs = require('fs');

const config = async (path = './.env') => {
  try {
    // read contents of the file
    const data = fs.readFileSync(path, 'UTF-8');
    
    // split the contents by new line
    const lines = data.split(/\r?\n/);
    
    // modify env
    lines.forEach((line) => {
      if (!line) return;
      const key = line.split('=')[0];
      const val = line.split('=')[1];
      if (key.startsWith('#')) return;
      process.env[key] = val
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = config;
