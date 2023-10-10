const choice1 = document.getElementById('h_menu1');
const choice2 = document.getElementById('h_menu2');
const choice3 = document.getElementById('h_menu3');
const cl1 = document.getElementById('choice-left1');
const cl2 = document.getElementById('choice-left2');
const cl3 = document.getElementById('choice-left3');
const show_data = document.getElementById('choice-data');

function hover1(){
    choice1.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice1.style.color = "white";
}
function m_out1(){
    choice1.style.backgroundColor = "";
    choice1.style.color = "";

}
function hover2(){
    choice2.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice2.style.color = "white";
}
function m_out2(){
    choice2.style.backgroundColor = "";
    choice2.style.color = "";

}
function hover3(){
    choice3.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice3.style.color = "white";
}
function m_out3(){
    choice3.style.backgroundColor = "";
    choice3.style.color = "";

}
function select1(){
    cl1.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl1.style.color = "black";
    cl1.style.borderRadius = "0 0 50px 0 "
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>วิชาการ</h4></center><ul><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>ปัญหาในการจัดการเรียนการสอน</li><li class='ms-4'>นิสิตไม่ได้ลงทะเบียนเรียนแต่นิสิตไปเข้าเรียนทุกคาบโดยไม่ทราบว่าไม่มีชื่อในรายวิชา</li><ol><li class='ms-4'>ให้นิสิตลงทะเบียนเรียนใหม่ในภาคการศึกษาถัดไป</li><li class='ms-4'>หากนิสิตเข้าเรียนตามปกติและผลการเรียนอยู่ในระดับที่ดี อาจจะหาแนวทางร่วมกัน เช่น ให้นิสิตลงทะเบียนเรียนใหม่ แต่ไม่ต้องเข้าชั้นเรียน เพื่อให้นิสิตมีเกรดในรายวิชาดังกล่าวและมีเวลาที่สามารถไปลงเรียนรายวิชาอื่นได้</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li></ol><ol><li class='ms-4'>ทำบันทึกข้อความถึงมหาวิทยาลัยดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</li></ol><li class='ms-4'>ที่ปรึกษาไม่ได้ตรวจสอบโครงสร้างจบให้นิสิตก่อนนิสิตยื่นสำเร็จการศึกษา เมื่อไม่ครบโครงสร้างจึงไม่สำเร็จการศึกษา ต้องลงทะเบียนในภาคฤดูร้อน ซึ่งนิสิตอาจไม่มีรายวิชาให้ลงเรียน และไม่สำเร็จการศึกษาในเวลาที่ควร</li><ol><li class = 'ms-4'>เบื้องต้น ขอให้ที่ปรึกษา ตรวจสอบโครงสร้างหลักสูตรของนิสิต ว่าควรให้สำเร็จการศึกษา หรือ ควรต้องเทียบรายวิชา หรือ ลงวิชาเพิ่มเติมให้ครบโครงสร้าง</li><li class ='ms-4'>หากไม่ครบโครงสร้าง ให้ลงเรียนในภาคการศึกษาถัดไป เพื่อให้นิสิตสามารถจบได้ในเวลาที่กำหนด</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li><ol><li class='ms-4'> ทำบันทึกข้อความถึงมหาวิทยาลัย ดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</ol><li class='ms-4'>การแก้ไขผลการเรียน (เกรด I / P)</li><ol><li class='ms-4'>การแก้ I คือ ไม่ว่ารายวิชานั้นจะเปิดหรือไม่ก็ตามในภาคการศึกษานั้น หากนิสิตลงทะเบียนเรียนในภาคการศึกษานั้นๆ นิสิตต้องติดต่ออาจารย์ผู้สอนเพื่อขอแก้ I และอาจารย์ต้องส่งผลการเรียนที่นิสิตขอแก้ไข ตามระยะเวลาที่ทางมหาวิทยาลัยกำหนด ไม่งั้นจะถือว่าอาจารย์ทำผิดวินัย</li></ol>"; 
}
function select2(){
    cl2.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl2.style.color = "black";
    cl2.style.borderRadius = "0 0 50px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>งานคุณภาพนิสิต</h4></center><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>ปัญหาในการจัดการเรียนการสอน</li><li class='ms-4'>นิสิตไม่ได้ลงทะเบียนเรียนแต่นิสิตไปเข้าเรียนทุกคาบโดยไม่ทราบว่าไม่มีชื่อในรายวิชา</li><ol><li class='ms-4'>ให้นิสิตลงทะเบียนเรียนใหม่ในภาคการศึกษาถัดไป</li><li class='ms-4'>หากนิสิตเข้าเรียนตามปกติและผลการเรียนอยู่ในระดับที่ดี อาจจะหาแนวทางร่วมกัน เช่น ให้นิสิตลงทะเบียนเรียนใหม่ แต่ไม่ต้องเข้าชั้นเรียน เพื่อให้นิสิตมีเกรดในรายวิชาดังกล่าวและมีเวลาที่สามารถไปลงเรียนรายวิชาอื่นได้</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li></ol><ol><li class='ms-4'>ทำบันทึกข้อความถึงมหาวิทยาลัยดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</li></ol><li class='ms-4'>ที่ปรึกษาไม่ได้ตรวจสอบโครงสร้างจบให้นิสิตก่อนนิสิตยื่นสำเร็จการศึกษา เมื่อไม่ครบโครงสร้างจึงไม่สำเร็จการศึกษา ต้องลงทะเบียนในภาคฤดูร้อน ซึ่งนิสิตอาจไม่มีรายวิชาให้ลงเรียน และไม่สำเร็จการศึกษาในเวลาที่ควร</li><ol><li class = 'ms-4'>เบื้องต้น ขอให้ที่ปรึกษา ตรวจสอบโครงสร้างหลักสูตรของนิสิต ว่าควรให้สำเร็จการศึกษา หรือ ควรต้องเทียบรายวิชา หรือ ลงวิชาเพิ่มเติมให้ครบโครงสร้าง</li><li class ='ms-4'>หากไม่ครบโครงสร้าง ให้ลงเรียนในภาคการศึกษาถัดไป เพื่อให้นิสิตสามารถจบได้ในเวลาที่กำหนด</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li><ol><li class='ms-4'> ทำบันทึกข้อความถึงมหาวิทยาลัย ดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</ol><li class='ms-4'>การแก้ไขผลการเรียน (เกรด I / P)</li><ol>"; // ใส่ข้อมูลตรงนี้
}
function select3(){
    cl3.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl3.style.color = "black";
    cl3.style.borderRadius = "0 0 50px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>อาจารย์ที่ปรึกษา</h4></center><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>ปัญหาในการจัดการเรียนการสอน</li><li class='ms-4'>นิสิตไม่ได้ลงทะเบียนเรียนแต่นิสิตไปเข้าเรียนทุกคาบโดยไม่ทราบว่าไม่มีชื่อในรายวิชา</li><ol><li class='ms-4'>ให้นิสิตลงทะเบียนเรียนใหม่ในภาคการศึกษาถัดไป</li><li class='ms-4'>หากนิสิตเข้าเรียนตามปกติและผลการเรียนอยู่ในระดับที่ดี อาจจะหาแนวทางร่วมกัน เช่น ให้นิสิตลงทะเบียนเรียนใหม่ แต่ไม่ต้องเข้าชั้นเรียน เพื่อให้นิสิตมีเกรดในรายวิชาดังกล่าวและมีเวลาที่สามารถไปลงเรียนรายวิชาอื่นได้</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li></ol><ol><li class='ms-4'>ทำบันทึกข้อความถึงมหาวิทยาลัยดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</li></ol><li class='ms-4'>ที่ปรึกษาไม่ได้ตรวจสอบโครงสร้างจบให้นิสิตก่อนนิสิตยื่นสำเร็จการศึกษา เมื่อไม่ครบโครงสร้างจึงไม่สำเร็จการศึกษา ต้องลงทะเบียนในภาคฤดูร้อน ซึ่งนิสิตอาจไม่มีรายวิชาให้ลงเรียน และไม่สำเร็จการศึกษาในเวลาที่ควร</li><ol><li class = 'ms-4'>เบื้องต้น ขอให้ที่ปรึกษา ตรวจสอบโครงสร้างหลักสูตรของนิสิต ว่าควรให้สำเร็จการศึกษา หรือ ควรต้องเทียบรายวิชา หรือ ลงวิชาเพิ่มเติมให้ครบโครงสร้าง</li><li class ='ms-4'>หากไม่ครบโครงสร้าง ให้ลงเรียนในภาคการศึกษาถัดไป เพื่อให้นิสิตสามารถจบได้ในเวลาที่กำหนด</li></ol><li class='ms-4'>นิสิตลงทะเบียนผิดรายวิชา ผิดโครงสร้าง เช่น นิสิต IT ไปลงฝึกงานของคณะ MIS</li><ol><li class='ms-4'> ทำบันทึกข้อความถึงมหาวิทยาลัย ดังนี้ -ขออนุมัติเปลี่ยนแปลงการลงทะเบียนจากรายวิชา xxxxxxx เป็นรายวิชา xxxxxx -ขออนุมัติส่งเกรดในรายวิชา โดยเปลี่ยนจากเกรด X เป็นเกรด X</ol><li class='ms-4'>การแก้ไขผลการเรียน (เกรด I / P)</li>"; // ใส่ข้อมูลตรงนี้
}

function totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
  }
  
  // ปิด Dropdown เมื่อคลิกนอก Dropdown
  window.onclick = function(event) {
    if (!event.target.matches('.Dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
  }