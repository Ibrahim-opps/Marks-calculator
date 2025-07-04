let totalMarks = +prompt("Enter total marks obtainable");
let subject1 = +prompt("Enter marks for Subject 1");
    let subject2 = +prompt("Enter marks for Subject 2");
        let subject3 = +prompt("Enter marks for Subject 3");
        let obtainedMarks = subject1 + subject2 + subject3;
        let percentage = (obtainedMarks / totalMarks) * 100;
        let grade;
        let remarks;
        if (percentage >= 80) {
            grade = "A+";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "A";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "B";
            remarks = "You need to improve";
        } else {
            grade = "Fail";
            remarks = "Ur trash kid";
        }
        document.write("<b>Total marks :</b> " + totalMarks + "<br>");
        document.write("<b>Marks obtained :</b> " + obtainedMarks + "<br>");
        document.write("<b>Percentage :</b> " + percentage.toFixed(2) + "%<br>");
        document.write("<b>Grade :</b> " + grade + "<br>");
        document.write("<b>Remarks :</b> " + remarks);