import fs from 'fs';
import mkdirp from 'mkdirp'


function saveFile (filename, contents, cb) {
  mkdirp(path.dirname(filename), err => {
    if (err) {
      return cb(err)
    }
    fs.writeFile(filename, contents, {'flag':'a'}, cb)
  })
}

export function concat (...theArgs) {
  const argLength = theArgs.length;
  if (argLength < 1) {
    throw new Error('No callback function');
  }
  const cb = theArgs[length-1];
  if (argLength < 2) {
    return cb(new Error('No destination file'));
  }
  const destFile = theArgs[length-2];
  if (argLength < 3) {
    return cb();
  }
  const firstFile = theArgs.shift();
  function done(err) {
    if (err) {
      return cb(err);
    }
    concat(...theArgs);
  }
  fs.readFile(firstFile, 'utf8', (err, fileContent) => {
    if (err) {
        return cb(err)
    }

      // The file doesn't exist, so let’s download it
      return saveFile(destfile, fileContent, done);
  });
}