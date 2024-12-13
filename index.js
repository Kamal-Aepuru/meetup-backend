require('dotenv').config();
const { initializeConnection } = require("./db/db");
initializeConnection();
const mongoose = require("mongoose");
const express = require("express");
const Events = require("./models/events.model");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
app.get("/", (req, res) => {
  res.send("Event App");
});
app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const updatedEventData = [
  {
    name: "Marketing Seminar",
    description:
      "A seminar on the latest digital marketing trends and strategies.",
    details:
      "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will focus on the latest trends, tools, and strategies in the digital marketing landscape. Industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, will share their expertise on audience engagement, content creation, and optimizing online campaigns. This seminar is a great opportunity for marketers, entrepreneurs, and business owners to enhance their knowledge and skills. Participants will also have a chance to network with peers and professionals in the marketing industry. A Q&A session will follow each talk, where attendees can ask questions and clarify doubts. Don’t miss this chance to take your marketing game to the next level!",
    hostedBy: "Marketing Experts",
    type: "Offline",
    startDate: "2023-08-15",
    startDay: "Tuesday",
    endDate: "2023-08-15",
    endDay: "Tuesday",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    coverImageUrl: "https://example.com/cover-marketing-seminar.jpg",
    eventImageUrl: "https://example.com/event-marketing-seminar.jpg",
    eventCost: 3000,
    speakers: [
      {
        name: "Sarah Johnson",
        title: "Marketing Manager",
        imageUrl: "https://example.com/sarah-johnson.jpg",
      },
      {
        name: "Michael Brown",
        title: "SEO Specialist",
        imageUrl: "https://example.com/michael-brown.jpg",
      },
    ],
    tags: ["marketing", "digital", "seminar"],
    additionalInformation: {
      dressCode: "Smart casual",
      ageRestrictions: "18 and above",
    },
    location: {
      venue: "Downtown Conference Center",
      address: "123 Marketing Blvd",
      city: "Los Angeles",
      country: "USA",
      latitude: 34.0522,
      longitude: -118.2437,
    },
  },
  {
    name: "AI in Business Workshop",
    description:
      "Explore how AI can transform business processes and decision-making.",
    details:
      "Join us for an interactive workshop on Artificial Intelligence in Business, hosted by AI Innovators Hub. This workshop will provide an in-depth understanding of how AI-powered tools and technologies are revolutionizing the way businesses operate. Learn about machine learning, automation, and predictive analytics and how they help businesses make smarter, data-driven decisions. Participants will engage in hands-on activities to experiment with AI tools for different use cases, such as marketing automation, customer support chatbots, and supply chain optimization. The session will be led by renowned AI researcher Dr. Alan Smith, who will share case studies and practical tips for implementing AI in organizations. Whether you are a business leader, tech enthusiast, or entrepreneur, this workshop is a must-attend for anyone looking to harness AI's potential.",
    hostedBy: "AI Innovators Hub",
    type: "Online",
    startDate: "2023-09-01",
    startDay: "Friday",
    endDate: "2023-09-01",
    endDay: "Friday",
    startTime: "02:00 PM",
    endTime: "05:00 PM",
    coverImageUrl: "https://example.com/ai-workshop-cover.jpg",
    eventImageUrl: "https://example.com/ai-workshop-event.jpg",
    eventCost: 0,
    speakers: [
      {
        name: "Dr. Alan Smith",
        title: "AI Researcher",
        imageUrl: "https://example.com/alan-smith.jpg",
      },
    ],
    tags: ["AI", "business", "workshop"],
    additionalInformation: {
      dressCode: null,
      ageRestrictions: null,
    },
    location: {
      venue: "Online",
      address: "Virtual Event",
      city: "N/A",
      country: "N/A",
      latitude: null,
      longitude: null,
    },
  },
  {
    name: "Startup Pitch Fest",
    description:
      "A platform for startups to pitch ideas to potential investors.",
    details:
      "The Startup Pitch Fest, organized by Startup Network, is a unique opportunity for budding entrepreneurs to present their business ideas to potential investors. This one-day event will feature pitches from innovative startups across various industries, including technology, healthcare, and education. Attendees will have the chance to learn from expert investors and gain critical feedback to improve their presentations and business models. Keynote speeches from industry leaders will provide guidance on securing funding and scaling businesses. Each startup will have a limited time to pitch, followed by a Q&A session with investors. Participants will also have opportunities to network with venture capitalists, angel investors, and like-minded entrepreneurs. This is your chance to make valuable connections and take your startup to the next level!",
    hostedBy: "Startup Network",
    type: "Offline",
    startDate: "2023-10-10",
    startDay: "Tuesday",
    endDate: "2023-10-10",
    endDay: "Tuesday",
    startTime: "09:00 AM",
    endTime: "04:00 PM",
    coverImageUrl: "https://example.com/startup-pitchfest-cover.jpg",
    eventImageUrl: "https://example.com/startup-pitchfest-event.jpg",
    eventCost: 500,
    speakers: [
      {
        name: "John Doe",
        title: "Venture Capitalist",
        imageUrl: "https://example.com/john-doe.jpg",
      },
      {
        name: "Jane Smith",
        title: "Startup Mentor",
        imageUrl: "https://example.com/jane-smith.jpg",
      },
    ],
    tags: ["startups", "pitching", "investors"],
    additionalInformation: {
      dressCode: "Business formal",
      ageRestrictions: "21 and above",
    },
    location: {
      venue: "Innovation Hub",
      address: "456 Startup St",
      city: "San Francisco",
      country: "USA",
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  {
    name: "Data Science Bootcamp",
    description:
      "An intensive bootcamp on data science fundamentals and real-world applications.",
    details:
      "Data Experts Academy brings you a comprehensive 7-day Data Science Bootcamp that covers everything from the fundamentals to advanced applications of data science. Participants will learn data analysis, data visualization, and machine learning techniques using tools like Python, R, and Tableau. Daily hands-on sessions will ensure participants develop practical skills they can apply immediately in real-world projects. Whether you are a beginner or an intermediate learner, this bootcamp will help you strengthen your understanding of statistics, data wrangling, and model-building processes. By the end of the week, you will complete a capstone project that demonstrates your ability to solve complex data problems. This bootcamp is ideal for professionals, students, and career-changers looking to enter the exciting world of data science.",
    hostedBy: "Data Experts Academy",
    type: "Online",
    startDate: "2023-11-15",
    startDay: "Wednesday",
    endDate: "2023-11-21",
    endDay: "Tuesday",
    startTime: "09:00 AM",
    endTime: "03:00 PM",
    coverImageUrl: "https://example.com/data-bootcamp-cover.jpg",
    eventImageUrl: "https://example.com/data-bootcamp-event.jpg",
    eventCost: 2000,
    speakers: [
      {
        name: "Jessica Lee",
        title: "Senior Data Scientist",
        imageUrl: "https://example.com/jessica-lee.jpg",
      },
    ],
    tags: ["data science", "bootcamp", "online"],
    additionalInformation: {
      dressCode: "Casual",
      ageRestrictions: "18 and above",
    },
    location: {
      venue: "Online",
      address: "Virtual Event",
      city: "N/A",
      country: "N/A",
      latitude: null,
      longitude: null,
    },
  },
  {
    name: "Creative Writing Workshop",
    description:
      "A hands-on workshop to improve your storytelling and creative writing skills.",
    details:
      "The Creative Writing Workshop, hosted by the Writers Guild, is an opportunity for aspiring authors, bloggers, and storytellers to refine their craft. Over the course of this interactive session, participants will explore various writing techniques, including plot development, character building, and dialogue creation. Expert instructors will guide attendees through brainstorming exercises and writing prompts to spark creativity. Whether you are working on a novel, short story, or blog, this workshop will provide valuable insight into the art of storytelling.",
    hostedBy: "Writers Guild",
    type: "Offline",
    startDate: "2023-12-05",
    startDay: "Tuesday",
    endDate: "2023-12-05",
    endDay: "Tuesday",
    startTime: "01:00 PM",
    endTime: "04:00 PM",
    coverImageUrl: "https://example.com/creative-writing-workshop.jpg",
    eventImageUrl: "https://example.com/creative-writing-workshop-event.jpg",
    eventCost: 1000,
    speakers: [
      {
        name: "Robert Thomas",
        title: "Creative Writing Instructor",
        imageUrl: "https://example.com/robert-thomas.jpg",
      },
    ],
    tags: ["writing", "workshop", "creative"],
    additionalInformation: {
      dressCode: "Casual",
      ageRestrictions: "16 and above",
    },
    location: {
      venue: "Writers Guild Office",
      address: "789 Writing Ln",
      city: "Chicago",
      country: "USA",
      latitude: 41.8781,
      longitude: -87.6298,
    },
  },
  {
    name: "Virtual Reality Expo",
    description:
      "Explore the world of virtual reality and its applications in various industries.",
    details:
      "The Virtual Reality Expo is an exciting opportunity to dive into the cutting-edge world of VR technology. Hosted by VR Innovators, this event will showcase the latest VR products, applications, and innovations. Experts will discuss the future of VR in industries like gaming, healthcare, education, and entertainment. There will be live demonstrations of VR simulations, games, and tools, allowing attendees to experience the technology firsthand. Attendees will also have the opportunity to network with VR developers, content creators, and industry professionals. Whether you're a VR enthusiast or a business looking to explore VR solutions, this expo is an event you won't want to miss.",
    hostedBy: "VR Innovators",
    type: "Offline",
    startDate: "2023-12-20",
    startDay: "Wednesday",
    endDate: "2023-12-20",
    endDay: "Wednesday",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    coverImageUrl: "https://example.com/vr-expo-cover.jpg",
    eventImageUrl: "https://example.com/vr-expo-event.jpg",
    eventCost: 500,
    speakers: [
      {
        name: "Robert Clark",
        title: "VR Developer",
        imageUrl: "https://example.com/robert-clark.jpg",
      },
      {
        name: "Emily Davis",
        title: "VR Content Creator",
        imageUrl: "https://example.com/emily-davis.jpg",
      },
    ],
    tags: ["virtual reality", "technology", "expo"],
    additionalInformation: {
      dressCode: "Casual",
      ageRestrictions: "18 and above",
    },
    location: {
      venue: "VR Exhibition Center",
      address: "123 VR Avenue",
      city: "San Francisco",
      country: "USA",
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
];

const insertStaticEvents = async () => {
  try {
    await Events.insertMany(updatedEventData);
    console.log("Static events inserted successfully!");
  } catch (error) {
    console.error("Error inserting static events:", error);
  }
};
// insertStaticEvents();

//Read the event by Id

const getAllEvents = async () => {
  try {
    const movies = await Events.find();
    return movies;
  } catch (error) {
    throw error;
  }
};

app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No Events Found" });
    } else {
      return res.status(200).json(events);
    }
  } catch (error) {
    res.status(400).json({ Error: error });
  }
});

app.get("/events/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const requestedEvent = await Events.findById(eventId);
    return res.status(200).json(requestedEvent);
  } catch (error) {
    console.error("Error fetching event:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
