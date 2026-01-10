function checkMarks(marks) {
  if (marks >= 40) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

for (let i = 30; i <= 60; i += 10) {
  console.log(i + " : " + checkMarks(i));
}
