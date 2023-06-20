// Zadanie 1: Elementy tablicy

// Mając tablicę zawierającą 3 liczby całkowite np. const numbers = [5, 10, 15];,
//  sprawdź, czy suma pierwszego i ostatniego elementu tablicy jest większa niż drugi element tej tablicy.
//   Jeżeli tak, wyświetl w konsoli informację "Suma pierwszego i ostatniego elementu jest większa niż drugi element",
//    w przeciwnym razie wyświetl "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element".
//     Sprawdź czy Twojej rozwiązanie zadziała prawidłowo dla innych wariantów (czyli czy jest uniwersalne).

const numbers = [5, 10, 15];

const sum = () => {
  if (numbers[0] + numbers[-1] > numbers[1]) {
    console.log(
      "Suma pierwszego i ostatniego elementu jest większa niż drugi element"
    );
  } else {
    console.log(
      "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element"
    );
  }
};

//ŁOPATOLOGICZIE

// Zadanie 2: Porównanie długości tablic

// Mając  dwie tablice np. const firstArray = [1, 2, 3]; i const secondArray = [4, 5];,
// sprawdź, która z nich jest dłuższa, a następnie wyświetl odpowiedni komunikat w konsoli, np. "Pierwsza tablica jest dłuższa" lub "Druga tablica jest dłuższa".
// Jeśli tablice mają taką samą długość, wyświetl "Tablice mają taką samą długość".
// Sprawdź czy Twojej rozwiązanie zadziała prawidłowo dla innych wariantów (czyli czy jest uniwersalne).

const firstArray = [1, 2, 3];
const secondArray = [4, 5];

const whichArrayIsLonger = () => {
  const first = firstArray.length;
  const second = firstArray.length;

  if (first > second) return "Pierwsza tablica jest dłuższa";
  else if (second > first) return "Druga tablica jest dłuższa";
  else return "Tablice mają taką samą długość";
};
