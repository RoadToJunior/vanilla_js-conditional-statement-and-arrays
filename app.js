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
