/***********************
 * Simple Grading System
 ***********************/

let students = [];     
let totalProcessed = 0;


function doIt(
    name,                        
    math,
    english,
    science,
    history,
    attendance,
    bonusPoints,
    extraCredit               
) {

    if (name !== null) {
        if (math >= 0 && english >= 0 && science >= 0 && history >= 0) {
            if (attendance >= 0) {
                let total = math + english + science + history;

                if (attendance > 90) {
                    total += 5;
                }

                if (bonusPoints > 0) {
                    total = total + bonusPoints;
                }

                if (extraCredit > 0) {
                    total = total + extraCredit;
                }

                let avg = total / 4;

                let grade = "";

                if (avg >= 80) {
                    grade = "A";
                } else {
                    if (avg >= 70) {
                        grade = "B";
                    } else {
                        if (avg >= 60) {
                            grade = "C";
                        } else {
                            if (avg >= 50) {
                                grade = "D";
                            } else {
                                grade = "F";
                            }
                        }
                    }
                }

                console.log("Student:", name);
                console.log("Average:", avg);
                console.log("Grade:", grade);

                students.push({
                    n: name,               
                    g: grade,            
                    a: avg
                });

                totalProcessed++;
            }
        }
    }
}


function summary() {
    console.log("Total students processed:", totalProcessed);
    console.log("All students:", students);
}


// ===== Program Execution =====
doIt("Alice", 78, 85, 90, 88, 95, 3, 2);
doIt("Bob", 55, 60, 58, 62, 80, 0, 1);
doIt("Charlie", 40, 45, 50, 48, 70, 0, 0);

summary();