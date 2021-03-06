// Generated by CoffeeScript 1.10.0
function generate_name() {
  var consonants, current_letter_type, each, i, j, k, l, len, len1, m, name, name_flatten, name_length, rand_TF, random_consonant, random_vowel, ref, results, startwith, vowels;

  consonants = ['k', 'l', 'm', 'n', 'p', 's', 't', 'w', 'j'];

  vowels = ['a', 'e', 'i', 'o', 'u'];

  current_letter_type = 'con';

  name = [];

  name_flatten = '';

  random_consonant = function() {
    return consonants[Math.ceil(Math.random() * consonants.length) - 1];
  };

  random_vowel = function() {
    return vowels[Math.ceil(Math.random() * vowels.length) - 1];
  };

  name_length = function() {
    var pos_lengths;
    pos_lengths = [3, 4, 5, 6, 7, 8];
    return pos_lengths[Math.ceil(Math.random() * pos_lengths.length - 1)];
  };

  rand_TF = function() {
    return Math.ceil(Math.random() * 100) % 2;
  };

  startwith = function() {
    if (rand_TF() === 0) {
      return current_letter_type = 'vow';
    } else {
      return current_letter_type = 'con';
    }
  };

  startwith();

  j = (function() {
    results = [];
    for (var k = 0, ref = name_length() - 1; 0 <= ref ? k <= ref : k >= ref; 0 <= ref ? k++ : k--){ results.push(k); }
    return results;
  }).apply(this);

  for (l = 0, len = j.length; l < len; l++) {
    i = j[l];
    if (current_letter_type === 'con') {
      name[i] = random_consonant();
      current_letter_type = 'vow';
    } else {
      name[i] = random_vowel();
      if ((Math.random() < .09) && (i !== j[j.length - 1])) {
        current_letter_type = 'vow';
      } else {
        current_letter_type = 'con';
      }
    }
  }

  if (current_letter_type === 'vow') {
    if (name[name.length - 1] !== 'n') {
      if (rand_TF()) {
        name[name.length - 1] = 'n';
      } else {
        name = name.slice(0, +(name.length - 2) + 1 || 9e9);
      }
    }
  }

  name[0] = name[0].toUpperCase();

  for (m = 0, len1 = name.length; m < len1; m++) {
    each = name[m];
    name_flatten += each;
  }
  
  return name_flatten;
}

document.onreadystatechange = function ()
{
  if (document.readyState === "complete")
  {
    const name = document.getElementById("name");
    name.innerHTML = "jan " + generate_name();
    document.getElementById("new-name").addEventListener("click", function() { name.innerHTML = "jan " + generate_name(); });
  }
}
