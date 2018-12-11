export default function promisify(func) {
  return (...args) =>
    new Promise((resolve, reject) => {
      const callback = (err, data) => (err ? reject(err) : resolve(data));

      func.apply(this, [...args, callback]);
    });
}
