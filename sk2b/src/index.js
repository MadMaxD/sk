import express from 'express';
import cors from 'cors';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
const app = express();
app.use(cors());

app.get('/task2B', (req, res) => {
  const fullName = req.query.fullname;
  const reDigits = /[\d_!@#$%^&*()_+=.,/?"~]+/g;
  const re = /([^\x00-\x7F]|\w)+/g;
  let matches;
  if (!reDigits.test(fullName)) {
    matches = fullName ? fullName.match(re) : null;
  } else {
    matches = null;
  }

  let formattedName = '';
  if (matches && matches.length < 4) {
    formattedName += `${capitalize(matches[matches.length - 1])} `;
    formattedName += matches
      .filter((name, index) => index !== matches.length - 1)
      .map(name => `${name.charAt(0).toUpperCase()}. `).join('');

    res.send(formattedName.slice(0, -1));
  } else {
    res.send('Invalid fullname');
  }
});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
