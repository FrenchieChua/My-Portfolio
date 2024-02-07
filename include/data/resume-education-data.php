<?php
$education = array(
    array(
        'school' => 'West Visayas State University',
        'course' => 'Bachelor  of Science in Computer Science, Major in Artificial Intellegence',
        'date' => '2020 - 2024',
        'address' => 'La Paz, Iloilo City, Philippines'
    ),
    array(
        'school' => 'Hinigaran National High School',
        'course' => 'Senior High School',
        'date' => '2018 - 2020',
        'address' => 'Hinigaran, Negros Occidental, Philippines'
    ),
    array(
        'school' => 'Ramon T. Diaz National High School',
        'course' => 'Junior High School',
        'date' => '2014 - 2018',
        'address' => 'Hinigaran, Negros Occidental, Philippines'
    ),
    array(
        'school' => 'Gandara II Central Elementary School',
        'course' => 'Elementary',
        'date' => '2008 - 2014',
        'address' => 'Gandara, Western Samar, Philippnes'
    )
);

echo json_encode($education);

