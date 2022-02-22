$(document).ready(function(){

    // var $txt = [
    //     ["t-3-325075_640x480.jpg", "Purple Haze", "2020.07.29", "zoom.png"],
    //     ["t-21-545213_640x480.jpg", "Masked Model", "2020.04.30", "zoom.png"],
    //     ["t-7-360109_640x480.jpg", "Birds of Beauty", "2020.05.04", "zoom.png"],
    //     ["t-8-308603_640x480.jpg", "Summer Wheat", "2019.06.14", "zoom.png"],
    //     ["t-9-340072_640x480.jpg", "Before the Storm", "2021.03.17", "zoom.png"],
    //     ["t-17-247234_640x480.jpg", "Young Woman", "2019.10.07", "zoom.png"],
    //     ["shutterstock_58264459-111274_640x480.jpg", "Before the Storm", "2020.12.24", "zoom.png"],
    //     ["t-13-584189_640x480.jpg", "A Loving Couple", "2021.02.21", "zoom.png"],
    //     ["shutterstock_56785618-132726_640x480.jpg", "Spiral Staircase", "2019.10.13", "zoom.png"],
    //     ["t-5-236106_640x480.jpg", "Lonely Ladybug", "2021.01.16", "zoom.png"],
    //     ["t3-8-321596_640x480.jpg", "Emphasis Lafuta", "2020.07.07", "zoom.png"],
    //     ["t-19-373493_640x480.jpg", "Monk Walks", "2021.03.12", "zoom.png"],
    //     ["t3-9-289799_640x480.jpg", "Arena Vivian", "2020.04.05", "zoom.png"],
    // ];
    var $txt = [
        ["img1.jpeg", "Nightcrawler", "2015.02.26", "zoom.png"],
        ["img2.jpeg", "It Comes at Night", "2017.10.19", "zoom.png"],
        ["img3.jpeg", "Good Time", "2018.01.04", "zoom.png"],
        ["img4.jpeg", "Logan", "2017.03.01 ", "zoom.png"],
        ["img5.jpeg", "Proud Mary", "2018.02.13", "zoom.png"],
        ["img6.jpeg", "Get Out", "2017.05.17", "zoom.png"],
        ["img7.jpeg", "Baby Driver", "2017.09.13", "zoom.png"],
        ["img8.jpeg", "Moonlight", "2017.02.22", "zoom.png"],
        ["img9.jpeg", "Personal Shopper", "2017.02.09", "zoom.png"],
        ["img10.jpeg", "Youth", "2016.01.07", "zoom.png"],
        ["img11.jpeg", "Chungking Express", "1995.09.02 ", "zoom.png"],
        ["img12.jpeg", "Carol", "2016.02.04", "zoom.png"],
        ["img13.jpeg", "Carol", "2016.02.04", "zoom.png"],
    ];

    var $article_boxs = `
        <article>
            <div class="orange">
                <div class="txt_part">
                    <h3></h3>
                    <h4></h4>
                    <span></span>
                    <a href="./">
                        <img src="" alt="">
                    </a>
                </div>
            </div>
        </article>
    `;

    for(i=0; i<$txt.length; i++){
        $("section").append($article_boxs)
    };

    $("section article").not(":eq(0)").each(function(i){
        $(this).css("background-image","url(./img/"+$txt[i][0]+")");
        $(this).find("h3").text($txt[i][1]);
        $(this).find("h4").text($txt[i][2]);
        $(this).find("img").attr("src", "./img/"+$txt[i][3]);;

    
    });



});