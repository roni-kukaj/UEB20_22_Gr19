let date = new Date();
let dateString = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
document.getElementById("date").innerHTML = dateString;

let social_media = ["facebook", "twitter", "googleplus", "linkedin"];
console.log(social_media[0]);
console.log(social_media[1]);
console.log(social_media[2]);
console.log(social_media[3]);


switch social_media{
  case 0:
    console.log("Facebook");
    break;
  case 1:
      console.log("Twitter");
      break;
  case 2:
        console.log("GooglePlus");
        break;
        case 3:
          console.log("LinkedIn");
          break;
}