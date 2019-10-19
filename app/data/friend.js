//array that holds all friends who have completed the survey
//initialize with dummy data
var friendList = [
    {
      name: 'Aaron Carter',
      profilePic: 'hhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cheatsheet.com%2Fwp-content%2Fuploads%2F2019%2F10%2Faaron-carter-1024x683.jpg&imgrefurl=https%3A%2F%2Fwww.cheatsheet.com%2Fentertainment%2Fwhat-is-aaron-carter-doing-now.html%2F&docid=G1pvhHo6MEg_rM&tbnid=f74a3q3YDqbHHM%3A&vet=10ahUKEwi1_YrZ7KjlAhWCvZ4KHSWODMIQMwiIASgMMAw..i&w=1024&h=683&bih=649&biw=1433&q=aaron%20carter&ved=0ahUKEwi1_YrZ7KjlAhWCvZ4KHSWODMIQMwiIASgMMAw&iact=mrc&uact=8',
      scores: [
        "4",
        "5",
        "5",
        "2",
        "4",
        "5",
        "4",
        "4",
        "3",
        "4"
      ]
    },
    {
      name: 'Aaron Rodgers',
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Ffb382ef040f147ecb90afbb4b61ea6ab%2F960x0.jpg%3Ffit%3Dscale&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Frobreischel%2F2019%2F09%2F08%2Ffor-green-bay-packers-to-be-great-aaron-rodgers-must-turn-back-the-clock%2F&docid=-LAolmMEO0-JbM&tbnid=2K4oY235_VZhYM%3A&vet=10ahUKEwiXgOvH7KjlAhWWjp4KHSZbCekQMwiRASgQMBA..i&w=960&h=640&bih=649&biw=1433&q=aaron%20rodgers&ved=0ahUKEwiXgOvH7KjlAhWWjp4KHSZbCekQMwiRASgQMBA&iact=mrc&uact=8',
      scores: [
        "1",
        "1",
        "2",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5",
        "4"
      ]
    },
    {
      name: 'Aaron Judge',
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.bleacherreport.net%2Fimg%2Fimages%2Fphotos%2F003%2F800%2F217%2Fhi-res-ee1635a57d17a83dbcc3c6c5b873a082_crop_north.jpg%3Fh%3D533%26w%3D800%26q%3D70%26crop_x%3Dcenter%26crop_y%3Dtop&imgrefurl=https%3A%2F%2Fbleacherreport.com%2Farticles%2F2819894-yankees-news-aaron-judge-exits-vs-royals-with-apparent-injury-after-swing&docid=ecylDws68sokMM&tbnid=mWzKdl83ijSHGM%3A&vet=10ahUKEwiPmNuZ7KjlAhUXqZ4KHURACksQMwh-KAMwAw..i&w=800&h=533&bih=649&biw=1433&q=aaron%20judge&ved=0ahUKEwiPmNuZ7KjlAhUXqZ4KHURACksQMwh-KAMwAw&iact=mrc&uact=8',
      scores: [
        "5",
        "1",
        "2",
        "3",
        "4",
        "1",
        "2",
        "3",
        "4",
        "4"
      ]
    },
    {
      name: 'Aaron Donald',
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cfe6166142c50000a327841%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D754%26cropX2%3D3887%26cropY1%3D7%26cropY2%3D3139&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Faaron-donald%2F&docid=lpX_zvHz4Md5bM&tbnid=RN0oNF-H9UfHKM%3A&vet=10ahUKEwjEw6Xy7KjlAhVSrJ4KHeyVDjcQMwh7KAIwAg..i&w=416&h=416&bih=649&biw=1433&q=aaron%20donald&ved=0ahUKEwjEw6Xy7KjlAhVSrJ4KHeyVDjcQMwh7KAIwAg&iact=mrc&uact=8',
      scores: [
        "4",
        "2",
        "2",
        "4",
        "3",
        "4",
        "1",
        "1",
        "2",
        "5"
      ]
    },
    {
      name: 'Aaron Paul',
      profilePic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.esquireme.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffull_img%2Fpublic%2Fimages%2F2019%2F09%2F09%2Faaron-paul.jpg%3Fitok%3DNULtSEiO&imgrefurl=https%3A%2F%2Fwww.esquireme.com%2Fcontent%2F38750-what-does-aaron-pauls-latest-breaking-bad-movie-teaser-mean&docid=6hm_2f9iofcKVM&tbnid=1rzymWqanezSUM%3A&vet=10ahUKEwjKxqSA7ajlAhWUu54KHSNbDywQMwh-KAQwBA..i&w=830&h=560&bih=649&biw=1433&q=aaron%20paul&ved=0ahUKEwjKxqSA7ajlAhWUu54KHSNbDywQMwh-KAQwBA&iact=mrc&uact=8',
      scores: [
        "3",
        "4",
        "5",
        "1",
        "2",
        "5",
        "3",
        "1",
        "1",
        "1"
      ]
    }
  ]
  
  module.exports = friendList;