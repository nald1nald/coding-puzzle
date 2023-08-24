document.addEventListener("DOMContentLoaded", function () {
  const calcBtn = document.getElementById("calorieBtn");
  calcBtn.addEventListener("click", calorieCalc);
});

// Function to calculate the total calories and find the elf carrying the highest calories
function calorieCalc() {
  // Input values for each elf
  const firstElfInput = document.getElementById("firstElf").value;
  const secondElfInput = document.getElementById("secondElf").value;
  const thirdElfInput = document.getElementById("thirdElf").value;
  const fourthElfInput = document.getElementById("fourthElf").value;
  const fifthElfInput = document.getElementById("fifthElf").value;

  //Calculate the total calories for each elf
  const firstElfCalories = calculateTotalCalories(firstElfInput);
  const secondElfCalories = calculateTotalCalories(secondElfInput);
  const thirdElfCalories = calculateTotalCalories(thirdElfInput);
  const fourthElfCalories = calculateTotalCalories(fourthElfInput);
  const fifthElfCalories = calculateTotalCalories(fifthElfInput);

  //Display the total calories for each elf
  document.getElementById("firstElfResult").textContent = firstElfCalories;
  document.getElementById("secondElfResult").textContent = secondElfCalories;
  document.getElementById("thirdElfResult").textContent = thirdElfCalories;
  document.getElementById("fourthElfResult").textContent = fourthElfCalories;
  document.getElementById("fifthElfResult").textContent = fifthElfCalories;

  //   Creates an array of objest for each elf with names and calories
  const elves = [
    {
      name: "First Elf",
      calories: firstElfCalories,
    },
    {
      name: "Second Elf",
      calories: secondElfCalories,
    },
    {
      name: "Third Elf",
      calories: thirdElfCalories,
    },
    {
      name: "Fourth Elf",
      calories: fourthElfCalories,
    },
    {
      name: "Fifth Elf",
      calories: fifthElfCalories,
    },
  ];

  const highestCalElf = getHighCalElf(elves);
  document.getElementById("highestCalElf").textContent =
    highestCalElf.name + " Carrying " + highestCalElf.calories + " Calories";
}

// Function to calculate the total calories from input fields
function calculateTotalCalories(input) {
  const invItems = input.split(",").map(Number);
  return invItems.reduce((sum, calories) => sum + calories, 0);
}

// Function to find the elf with the highest calories
function getHighCalElf(elves) {
  return elves.reduce(
    (highest, elf) => (elf.calories > highest.calories ? elf : highest),
    elves[0]
  );
}
