function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if ((score < 0) || (score > 100)) {
        return "INVALID SCORE";
    } else if ((score <=100) && (score >= 98)) {
        return "A+";
    } else if ((score <=97) && (score >= 93)) {
        return "A";
    } else if ((score <=92) && (score >= 90)) {
        return "A-";
    } else if ((score <=89) && (score >= 88)) {
        return "B+";
    } else if ((score <=87) && (score >= 83)) {
        return "B";
    } else if ((score <=82) && (score >= 80)) {
        return "B-";
    } else if ((score <=79) && (score >= 78)) {
        return "C+";
    } else if ((score <=77) && (score >= 73)) {
        return "C";
    } else if ((score <=72) && (score >= 70)) {
        return "C-";
    } else if ((score <=69) && (score >= 68)) {
        return "D+";
    } else if ((score <=67) && (score >= 63)) {
        return "D";
    } else if ((score <=62) && (score >= 60)) {
        return "D-";
    } else if ((score <=59) && (score >= 0)) {
        return "F";
    }
}
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
