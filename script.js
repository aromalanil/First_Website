var profile = [{
    name: "Aromal",
    phone: "9207980389",
    dp: "image/aromal.jpeg"
  },
  {
    name: "Anandhu M",
    phone: "9496961783",
    dp: "image/anandhakrishnan.jpg"
  },
  {
    name: "Vishnu",
    phone: "8078360323",
    dp: "image/vishnu.jpg"
  },
  {
    name: "Abraham",
    phone: "9400326901",
    dp: "image/abraham.jpg"
  },
  {
    name: "Goutham",
    phone: "7994155476",
    dp: "image/goutham.jpg"
  },
  {
    name: "Issac",
    phone: "8921117169",
    dp: "image/issac.jpg"
  }

];

var len = profile.length;

var ans = document.getElementById("answer");



window.addEventListener('load', function()

  {
    var srch = document.getElementById('srch_button');
    srch.addEventListener('click', function()
     {
      var result_html = '';
      var nme = document.getElementById("insert_name").value;
      var phone = document.getElementById("insert_phone").value;
      for (var i = 0; i < len; i++)
      {

        if ((profile[i].name.includes(nme)) && (nme != '')&& (nme!=' '))
        {
          result_html += "<div class='result'><h1 class='result_name'><img class='dp' src='" + profile[i].dp + "'>" + profile[i].name + "</h1><h2 class='result_phone'>" + profile[i].phone + "</h2></div>";
        }
        else if (phone == profile[i].phone)
         {
          result_html += "<div class='result'><h1 class='result_name'><img class='dp' src='" + profile[i].dp + "'>" + profile[i].name + "</h1><h2 class='result_phone'>" + profile[i].phone + "</h2></div>";
        }

      }

      if (result_html == '') {
        result_html += "<div class='result'><h1 class='result_name'><img class='dp' src='image/error.png'>ERROR</h1><h2 class='result_phone'>No Result Found</h2></div>";
      }

      ans.innerHTML = result_html;
    });
  });
