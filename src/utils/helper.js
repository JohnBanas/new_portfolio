//validate email using regex
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//capitalize repositories and add space instead of hyphen
export function capitalizeRepo(string) {
  return string
    .split('-')
    .map(
      function capitalize(letter) {
        return letter
          .charAt(0)
          .toUpperCase() + letter
            .slice(1);
      }
    )
    .join(' ');
}