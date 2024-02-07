<?php
// Get works from the database or any other source
$works = array(
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Web Application", 
        "likes" => 253, 
        "title" => "CodifyConnect: Empowering Coders, One Line at a Time"
    ),
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Web Design", 
        "likes" => 165, 
        "title" => "WebWeave: Crafting Digital Experiences"
    ),
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Graphic Design", 
        "likes" => 246, 
        "title" => "VisualVista"
    ),
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Mobile Application", 
        "likes" => 396, 
        "title" => "AppArcade: Building Your Mobile World"
    ),
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Web Application", 
        "likes" => 452,
        "title" => "CareerPathForge: Crafting Your Professional Future"
    ),
    array(
        "image" => "assets/img/work1.png", 
        "subheading" => "Graphic Design", 
        "likes" => 281, 
        "title" => "DesignScape"
    ),
);

echo json_encode($works);
