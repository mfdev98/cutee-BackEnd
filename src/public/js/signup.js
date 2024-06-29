console.log("Signup frontend javascript file");

function validateSignupForm() {
   const memberNick = $(".member-nick").val();
   const memberPhone = $(".member-phone").val();
   const memberPaswword = $(".member-password").val();
   const confirmPassword = $(".confirm-password").val();

   if (
      memberNick === "" ||
      memberPhone === "" ||
      memberPaswword === "" ||
      confirmPassword === ""
   ) {
      alert("Please insert all required inputs");
      return false;
   }

   if (memberPaswword !== confirmPassword){
      alert("Password differs, Please check!");
      return false;
   }
}