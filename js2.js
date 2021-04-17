

//Object literals
let apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
      return this.color + " " + this.type + " apple";
    },
  };
  apple.color = "reddish";
  alert(apple.getInfo());
  

  function Apple(type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function () {
      return this.color + " " + this.type + " apple";
    };
  }
  
  function Apple(type) {
    this.type = type;
    this.color = "red";
  }
  
  Apple.prototype.getInfo = function () {
    return this.color + " " + this.type + " apple";
  };
  
  var apple1 = new Apple("macintosh");
  var apple2 = new Apple("gala");
  console.log(apple1.getInfo());*/
  
  let user = {
    name: "Simon Yesho",
    age: 30,
    email: "sepkap123@gmail.com",
    location: "Kapchorwa",
    blogs: [
      {title: "Why mac and cheese rules", likes: 30},
      {title: "10 things to make with marmite", likes: 80},
    ],
    login: function () {
      console.log("The user loggin in");
    },
    logout: function () {
      console.log("The user logged out");
    },
  
    logBlogs: function () {
      console.log("This user has written the following blogs:");
      this.blogs.forEach((blog) => {
        console.log(blog.title, blog.likes);
      });
    },
  };
  console.log(user);
  console.log(user.name);
  
  user.age = 35;
  console.log(user.age);
  console.log(typeof user);
  console.log(user.login());
  console.log(user.logout());
  console.log(user.logBlogs());
  
  const book1 = {
    title: "book one",
    author: "John Doe",
    year: 2013,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in
      ${this.year}`;
    },
  };
  
  const book2 = {
    title: "book two",
    author: "Jane Doe",
    year: 2017,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in
      ${this.year}`;
    },
  };
  
  console.log(book1.getSummary());
  console.log(Object.values(book1));
  console.log(Object.values(book2));
  
  
  
  
  function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  this.getSummary = function () {
      return `${this.title} was written by ${this.author} in
      ${this.year}`;
    };
  }

  //Prototypes
  
  Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in
    ${this.year}`;
  };
  
  function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
  }
  Magazine.prototype = Object.create(Book.prototype);
  const book1 = new Book("Book one", "John", "2016");
  const mag1 = new Magazine("mag one", "James steve", "2020", "Jan");
  
  console.log(mag1.getSummary());
  console.log(book1);
  
  //forEach loop
  var simon = [1, 2, 3, 4, 5];
  simon.forEach((bx) => {
    console.log(bx);
  });
  
  const companies = [
    {name: "company one", category: "Finance", start: 1981, end: 2003},
    {name: "company two", category: "Retail", start: 1992, end: 2008},
    {name: "company three", category: "auto", start: 1999, end: 2007},
    {name: "company four", category: "Retail", start: 1989, end: 2010},
    {name: "company five", category: "Technology", start: 2009, end: 2014},
    {name: "company six", category: "Fiance", start: 1987, end: 2010},
    {name: "company seven", category: "Auto", start: 1986, end: 1996},
    {name: "company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "company Nine", category: "Retail", start: 1981, end: 1989},
  ];
  
  const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }
  
  companies.forEach((company) => {
    console.log(company);
  });

  // Filter
  
  const canDrink = age.filter(function (age) {
    if (age >= 21) {
      return true;
    }
  });
  
  let canDrink = [];
  for (let i = 0; i < companies.length; i++) {
    if (age[i] >= 21) {
      canDrink.push(age[i]);
    }
  }
  
  const canDrink = age.filter((age) => age >= 21);
  
  console.log(canDrink);
  
  const retailCompanies = companies.filter(function (company) {
    if (company.category === "Retail") {
      return true;
    }
  });
  
  const retailCompanies = companies.filter(
    (company) => company.category == "Retail",
  );
  console.log(retailCompanies);
  
  const eightiesCompanies = companies.filter(
    (company) => company.start >= 1980 && company.start < 1990,
  );
  console.log(eightiesCompanies);
  
  const lastedTenYears = companies.filter(
    (company) => company.end - company.start > 10,
  );
  
  console.log(lastedTenYears);
  
  const companyNames = companies.map(function (company) {
    return company.name;
  });
  
  const test = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
  });
  
  const test = companies.map((company) => {
    return `${company.name} [${company.start} - ${company.end}]`;
  });
  
  console.log(test);
  

  //Map 
  const agesSquare = age.map((age) => Math.sqrt(age)).map((age) => age * 2);
  console.log(agesSquare);
  

  //Sort
  const sortCompany = companies.sort(function (c1, c2) {
    if (c1.start < c2.start) {
      return 1;
    } else {
      return -1;
    }
   });
  
  const sortCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  console.log(sortCompany);
  
  let ageSum = 0;
  for (let i = 0; i < age.length; i++) {
    ageSum += age[i];
  }
  
  //Reduce
  const ageSum = age.reduce((total, age) => total + age, 0);
  
  console.log(ageSum);
  
  const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
  }, 0);
  
  const totalYears = companies.reduce(
    (total, company) => total + (company.end - company.start),
    0,
  );
  console.log(totalYears);
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  let newarr = arr.filter((a) => a % 2 === 0);
  
  let newarr = arr.map((a) => a * a);
  
  const sum = arr.reduce((num1, num2) => {
    return num1 + num2;
  });

  //Combine Array functions
    const newArr = arr
    .filter((a) => a % 2 === 0)
    .map((a) => a * a)
    .reduce((a, b) => a + b);
  console.log(newArr);
  
  let myArray = [11, 22, 34, 65, 35];
  let mySet = new Set(myArray);
  mySet.add("100");
  mySet.add({a: 1, b: 2});
  mySet.delete(22);
  mySet.clear();
  
  mySet.forEach(function (val) {
    console.log(val);
  });
  console.log(mySet);
  
  let myMap = new Map([
    ["a", "Hello"],
    ["b2", "Goodbye"],
  ]);
  myMap.set("c3", "Foo");
  myMap.delete("a");
  console.log(myMap.size);
  console.log(myMap);
  

  //Weak set
  let carWeakSet = new WeakSet();
  
  let car1 = {
    make: "Toyota",
    model: "Camry",
  };
  
  let car2 = {
    make: "Honda",
    model: "Civic",
  };
  
  carWeakSet.add(car1);
  carWeakSet.add(car2);
  carWeakSet.delete(car1);
  console.log(carWeakSet);
  //Weak map
  let carWeakMap = new WeakMap();
  let key1 = {
    id: 1,
  };
  
  let car2 = {
    make: "Honda",
    model: "Civic",
  };
  
  carWeakMap.set(key1, car2);
  console.log(carWeakMap);
  
  function greet($greeting) {
    console.log($greeting);
  }
  
  greet("Hello");
  
  function greet($greeting = "Hello world") {
    console.log($greeting);
  }
  
  greet();
  
  let args1 = [1, 2, 3];
  let args2 = [4, 5, 6];
  
  function test() {
    console.log(args1 + "," + args2);
  }
  
  //test.apply(null, args);
  test(...args1, ...args2);
  
  function* g1() {
    console.log("Hello");
    yield "Yield 1 Ran..";
    console.log("World");
    yield "Yield 2 Ran";
    return "Returned...";
  }
  
  var g = g1();
  // console.log(g.next());
  // console.log(g.next());
  // console.log(g.next());
  
  for (let val of g) {
    console.log(val);
  }
  
  //Promises
  let myPromise = Promise.resolve("Foo");
  myPromise.then((res) => console.log(res));
  
  var myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);
  });
  
  myPromise.then((res) => {
    res += 3;
    console.log(res);
  });
  

  //classes and sub-class
  class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    static countUser() {
      console.log("There are 50 users");
    }
  
    register() {
      console.log(this.username + " is now registered");
    }
  }
  
  let bob = new User("bob", "bob@gmail.com", "12345");
  
  bob.register();
  User.countUser();
  
  class Member extends User {
    constructor(username, email, password, memberPackage) {
      super(username, email, password);
      this.package = memberPackage;
    }
    getPackage() {
      console.log(
        this.username + " is subscribed to the " + this.package + " package",
      );
    }
  }
  
  let mike = new Member("mike", "mike@gmail.com", "12345", "premium");
  mike.getPackage();
  mike.register();
  
  let name = "Simon";
  let template = `<h1>Hello ${name}</h1><p>This is a simple javascript template`;
  document.getElementById("xs").innerHTML = template;
  document.getElementsByName("div").innerHTML = "Simon Yesho";
  let x = document.getElementById("xs");
