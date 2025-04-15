import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl text-gray-900 font-bold mb-6">About Us</h1>
      <p>
        Hyyyy,{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        I'm a Full Stack Developer with a passion for building dynamic, responsive, and user-friendly web applications. I specialize in both front-end and back-end development, creating seamless digital experiences from concept to deployment. This blog website project showcases my skills in full stack development, combining clean UI/UX design with powerful functionality. I love turning ideas into real-world applications and continuously improving my craft through hands-on projects like this one.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Welcome to WebBlog — Your Hub for Tech Insights and Innovation!
      </h2>
      <p>
        At WebBlog, we believe in the power of sharing knowledge and connecting passionate minds. Our platform is built to serve developers, tech enthusiasts, and curious learners by offering a space to publish, explore, and engage with high-quality content on tech field, business, Entertainment and devotion etc... and the evolving tech landscape.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Our Mission:
      </h2>
      <p>
        To empower creators and readers by providing a seamless, modern blogging experience that bridges the gap between learning and teaching in the developer community.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">What Makes Us Different?</h2>
      <p>
        🔧 Full Stack Magic: From sleek front-end interfaces to powerful back-end systems, our platform is developed with a modern tech stack to ensure speed, security, and scalability.
        <br />
        ✍️ User-Friendly Editor: Write your blogs effortlessly with our intuitive markdown editor and responsive UI.
        <br />
        🌐 Interactive Community: Read Blogs, See our popular creaters, trending blogs and category wise blog.
        <br />
        🔒 Secure & Scalable: Built with the latest technologies to ensure your data and content stay safe and accessible.
      </p>
      <h2 className="font-semibold text-gray-900 text-3xl">
      Meet the Creator:
      </h2>
      <p>
        Hey there! I’m Suraj Maurya, a passionate Full Stack Developer with a knack for crafting engaging digital experiences. This blog project is more than just code—it's a reflection of my learning journey and love for web development. Feel free to connect with me or contribute to the project on GitHub. Let’s keep building and learning—together.
      </p>
    </div>
  );
}

export default About;