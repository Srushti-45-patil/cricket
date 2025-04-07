const videos = [
    {
      title: "Cricket Batting Techniques",
      url: "https://www.youtube.com/embed/XdB6nKI3ZGw",
      description: "Learn the fundamentals of batting, including stance, grip, and footwork."
    },
    {
      title: "Fast Bowling Tips",
      url: "https://www.youtube.com/embed/LdqClcNyhHU",
      description: "Master the art of fast bowling with these expert tips."
    },
    {
      title: "Spin Bowling Masterclass",
      url: "https://www.youtube.com/embed/xbpck9yXovk",
      description: "Learn how to spin the ball effectively with different techniques."
    },
    {
      title: "Fielding Drills for Beginners",
      url: "https://www.youtube.com/embed/og8myyxb6j8",
      description: "Improve your fielding skills with these simple but effective drills."
    },
    {
      title: "Perfect Cover Drive Technique",
      url: "https://www.youtube.com/embed/wz47WfR_L1g",
      description: "A step-by-step guide to playing the perfect cover drive."
    }
  ];
  
  const Library = () => {
    return (
      <div className="mx-10 my-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Cricket Techniques Learning Library</h2>
        <div className="grid grid-cols-3 gap-5">
          {videos.map((video, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg bg-white">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-48 rounded-md" 
                  src={video.url} 
                  title={video.title} 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-600 mt-2">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Library;