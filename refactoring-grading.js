// ***********************
// * Simple Grading System (Refactored)
// ***********************

const students = [];
let totalProcessed = 0;

// Helper function to calculate grade
function calculateGrade(avg) {
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "F";
}

// Helper function to validate input
function isValidStudent(name, scores, attendance) {
    if (!name) return false;
    if (attendance < 0) return false;
    return scores.every(score => score >= 0);
}

function processStudent(
    name,
    math,
    english,
    science,
    history,
    attendance,
    bonusPoints = 0,
    extraCredit = 0
) {
    const scores = [math, english, science, history];

    if (!isValidStudent(name, scores, attendance)) {
        console.log("Invalid student data");
        return;
    }

    let total = scores.reduce((sum, score) => sum + score, 0);

    if (attendance > 90) total += 5;
    total += bonusPoints + extraCredit;

    const average = total / scores.length;
    const grade = calculateGrade(average);

    console.log(`Student: ${name}`);
    console.log(`Average: ${average}`);
    console.log(`Grade: ${grade}`);

    students.push({ name, grade, average });
    totalProcessed++;
}

function summary() {
    console.log("Total students processed:", totalProcessed);
    console.log("All students:", students);
}

// ===== Program Execution =====
processStudent("Alice", 78, 85, 90, 88, 95, 3, 2);
processStudent("Bob", 55, 60, 58, 62, 80, 0, 1);
processStudent("Charlie", 40, 45, 50, 48, 70);

summary();