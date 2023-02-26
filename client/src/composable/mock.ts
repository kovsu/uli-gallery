import { ref } from "vue";
import dayjs from "dayjs";

function generateDate() {
  return dayjs().format("YYYY.MM.DD");
}

export const images = ref([
  {
    title: "Ricardo Purcallas",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1670617007161-b720c3eef493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  },
  {
    title: "Megan Ruth",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676928859062-fabf093e751e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
  },
  {
    title: "Alena Torgonskaya",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676809430473-1413b1319f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    title: "Tide_trasher_x",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676899965665-f11bcf456808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80",
  },
  {
    title: "Annie Spratt",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676807882713-181049174265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Audrey Langlois",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676471769503-37135c9b1cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    title: "Olivie Strauss",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676912819036-b9024f1e74ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
  },
  {
    title: "Stephen Leonardi",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676912116272-ef4450a2dc67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    title: "Shubham Dhage",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676839560241-bca2c9116ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
  },
  {
    title: "Willian Justen de Vasconcellos",
    time: generateDate(),
    url: "https://images.unsplash.com/photo-1676914333302-53615f404416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  },
]);

export const friends = ref([
  {
    name: "Ricardo Purcallas",
    username: "123321",
    show: [
      "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    name: "Megan Ruth",
    username: "223212",
    show: [
      "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    name: "Ricardo Purcallas",
    username: "123321",
    show: [
      "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    name: "Ricardo Purcallas",
    username: "123321",
    show: [
      "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    name: "Ricardo Purcallas",
    username: "123321",
    show: [
      "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677328155487-7c604ed8b561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw=&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
]);

export const posts = ref([
  {
    from: "Hi",
  },
  {
    from: "Hello",
  },
]);

