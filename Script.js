  const button1 = document.getElementById('btnradio1');
  const button2 = document.getElementById('btnradio2');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');

  button1.addEventListener('click', function() {
    page1.classList.add('active');
    page2.classList.remove('active');
  });

  button2.addEventListener('click', function() {
    page2.classList.add('active');
    page1.classList.remove('active');
  });

// ฟังก์ชันสำหรับการตรวจสอบข้อมูลใน input page1
function checkInputs() {
  var inputIds = [
    "salarybox", "daybox", "otnormalbox", "otx2box", "otx3box",
    "bonus1box", "bonus2box", "insurebox",
  ];

  for (var i = 0; i < inputIds.length; i++) {
    var inputElement = document.getElementById(inputIds[i]);
    var inputValue = inputElement.value;

    if (isNaN(inputValue) || inputValue.trim() === "") {
      alert("กรุณากรอกข้อมูลเป็นตัวเลขเท่านั้น");
      inputElement.value = ""; 
      inputElement.focus();    
      return false;
    }
  }
  
  return true;
}

// คำนวณค่าในช่อง input ถ้าหากไม่ผ่านฟังก์ชั่น checkInputs จะไม่โชว์ค่า result1

document.getElementById("btnradio3").addEventListener("click", function() {
  if (checkInputs()) {
    calculateAndShowResult();
    document.getElementById("btnradio5").style.display = "block";
  } else {
    // กรณีไม่ผ่านการตรวจสอบ คุณอาจทำอะไรก็ได้ตามความต้องการ เช่นไม่ต้องแสดงผล result1
    document.getElementById("result1").innerHTML = "";
  }
});



function calculateAndShowResult() {
  var salary = parseFloat(document.getElementById("salarybox").value) || 0;
  var day = parseFloat(document.getElementById("daybox").value) || 0;
  var otnormal = parseFloat(document.getElementById("otnormalbox").value) || 0;
  var otx2 = parseFloat(document.getElementById("otx2box").value) || 0;
  var otx3 = parseFloat(document.getElementById("otx3box").value) || 0;
  var bonus1 = parseFloat(document.getElementById("bonus1box").value) || 0;
  var bonus2 = parseFloat(document.getElementById("bonus2box").value) || 0;
  var insure = parseFloat(document.getElementById("insurebox").value) || 0;
 

  var income = ((salary * day) + (((salary * otx2) * 2))) + " บาท";
  var ot = (((salary / 8) * (otnormal * 1.5)) + ((salary / 8) * (otx3 * 3))) + " บาท";
  var bonus = (bonus1 + bonus2) + " บาท";
  var netIncome = (((salary * day)) + (((salary * otx2 ) * 2) + ((salary / 8) * otnormal * 1.5) + ((salary / 8) * otx3 * 3)) + (bonus1 + bonus2) - insure) + " บาท";
  var workDays = day + " วัน";

  var resultText = "รายได้: " + income + "<br>";
  resultText += "OT: " + ot + "<br>";
  resultText += "โบนัสพิเศษ: " + bonus + "<br>";
  resultText += "หักค่าประกันสังคม: " + insure + " บาท<br>";
  resultText += "จำนวนวันที่มาทำงาน: " + workDays;
  resultText += "ผลรวม: " + netIncome + "<br>";

  document.getElementById("result1").innerHTML = resultText;

}

//---reset page1
function resetPage1() {
  location.reload(page1);
  
  // ซ่อนปุ่ม "btnradio5"
  var btnRadio5 = document.getElementById("btnradio5");
  if (btnRadio5) {
    btnRadio5.style.display = "none";
  }
}

//--------------------------------------------------------------------------------



function checkInputs2() {
  var inputIds = [
    "salarybox1","otnormalbox1","dayoffwork1","otx3box1","bonus1box1",
    "bonus2box1","insurebox1","absentbox1","leavebox1",
    "latebox1","damagebox1",

  ];

  for (var i = 0; i < inputIds.length; i++) {
    var inputElement = document.getElementById(inputIds[i]);
    var inputValue = inputElement.value;

    if (isNaN(inputValue) || inputValue.trim() === "") {
      alert("กรุณากรอกข้อมูลเป็นตัวเลขเท่านั้น");
      inputElement.value = ""; 
      inputElement.focus();    
      return false;
    }
  }
  
  return true;
}


// คำนวณค่าในช่อง input ถ้าหากไม่ผ่านฟังก์ชั่น checkInputs2 จะไม่โชว์ค่า result2

document.getElementById("btnradio4").addEventListener("click", function() {
  if (checkInputs2()) {
    calculateAndShowResult2();
    document.getElementById("btnradio6").style.display = "block";
  } else {
    // กรณีไม่ผ่านการตรวจสอบ คุณอาจทำอะไรก็ได้ตามความต้องการ เช่นไม่ต้องแสดงผล result1
    document.getElementById("result2").innerHTML = "";
  }
});

function calculateAndShowResult2() {
  var salary = parseFloat(document.getElementById("salarybox1").value) || 0;
  var otnormal = parseFloat(document.getElementById("otnormalbox1").value) || 0;
  var dayoffwork2 = parseFloat(document.getElementById("dayoffwork1").value) || 0;
  var otx3 = parseFloat(document.getElementById("otx3box1").value) || 0;
  var bonus1 = parseFloat(document.getElementById("bonus1box1").value) || 0;
  var bonus2 = parseFloat(document.getElementById("bonus2box1").value) || 0;
  var insure = parseFloat(document.getElementById("insurebox1").value) || 0;
  var absent = parseFloat(document.getElementById("absentbox1").value) || 0;
  var leave = parseFloat(document.getElementById("leavebox1").value) || 0;
  var late = parseFloat(document.getElementById("latebox1").value) || 0;
  var damage = parseFloat(document.getElementById("damagebox1").value) || 0;

  var income2 = (((salary) + (((salary / 30) * dayoffwork2) * 2))) + " บาท";
  var ot2 = ((((salary / 30) / 8) * otnormal) * 1.5) + ((((salary / 30) / 8) * otx3) * 3) + " บาท";
  var absentDay = ((salary / 30) * absent) + " บาท";
  var bonus = (bonus1 + bonus2) + " บาท";
  var leaveDay = leave + " วัน";
  var lateDay = (((salary / 30) / 8) / 60) * late + " บาท";
  var netIncome2 = ((((salary) + (((salary / 30) * dayoffwork2) * 2))) + ((((salary / 30) / 8) * otnormal) * 1.5) + ((((salary / 30) / 8) * otx3) * 3) + (bonus1 + bonus2) -  (((salary / 30) * absent) + ((((salary / 30) / 8) / 60) * late))) + " บาท";

  var resultText = "รายได้: " + income2 + "<br>";
  resultText += "OT: " + ot2 + "<br>";
  resultText += "โบนัสพิเศษ: " + bonus + "<br>";
  resultText += "ขาด: " + absentDay + " <br>";
  resultText += "ลา: " + leaveDay + " <br>";
  resultText += "สาย: " + lateDay + " <br>";
  resultText += "หักค่าประกันสังคม: " + insure + " บาท<br>";
  resultText += "หักค่าความเสียหาย: " + damage + " บาท<br>";
  resultText += "ผลรวม: " + netIncome2 + "<br>";

  document.getElementById("result2").innerHTML = resultText;
}



// เมื่อคลิกปุ่ม btnradio6
document.getElementById("btnradio6").addEventListener("click", function() {
  button2.click()
  // ซ่อน result2
  var result2Element = document.getElementById("result2");
  if (result2Element) {
    result2Element.style.display = "none";
  }
});

//---reset page2
function resetPage2() {
  location.reload(page2);

  // ซ่อนปุ่ม "btnradio6"
  var btnradio6 = document.getElementById("btnradio6");
  if (btnradio6) {
    btnradio6.style.display = "none";
  }
 
}












