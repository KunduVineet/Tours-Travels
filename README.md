

# Tours Project

This project is a simple React-based web application that displays various tours. Users can view the details of each tour, read more information, and remove tours they are not interested in. Once all tours are removed, a refresh button allows users to reload the tour list.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app-component)
  - [Tours](#tours-component)
  - [Card](#card-component)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project contains the following files and directories:

```
├── src
│   ├── App.js
│   ├── components
│   │   ├── Tours.js
│   │   ├── Card.js
│   ├── data.js
│   ├── App.css
└── README.md
```

- **App.js**: The main entry point of the application.
- **components**: Contains all the reusable components like `Tours.js` and `Card.js`.
- **data.js**: Contains the data (list of tours) that is rendered on the website.
- **App.css**: Contains the styling for the project.

## Features

- Display a list of tours with images, names, descriptions, and prices.
- Show a shortened description of each tour, with the option to "Read more" or "Show less."
- Remove a tour from the list when a user clicks the "Not Interested" button.
- Refresh the list of tours when there are no tours left.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tours-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tours-project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

You will see a list of available tours with their descriptions and prices. You can click on **"Read more"** to expand the tour description or **"Not Interested"** to remove a tour from the list.

If all tours are removed, a message will appear saying **"No Tours left"**, and a refresh button will be available to reload the tours.

## Components

### App Component

- Manages the state of the tour list using the `useState` hook.
- Contains the logic to remove a tour from the list.
- Displays the **Tours** component and manages refreshing when no tours are left.

### Tours Component

- Accepts the list of tours and the `removeTour` function as props.
- Maps over the `tours` array and renders each tour as a **Card** component.

### Card Component

- Displays individual tour details such as image, name, price, and a short description.
- Provides the ability to expand the tour description and toggle between **"Read more"** and **"Show less"**.
- The **"Not Interested"** button allows users to remove the tour from the list.

## Styling

All styles are contained in the `App.css` file. Key classes include:

- `.container`: Layout for the main tour list.
- `.card`: Styling for each individual tour card.
- `.tour-info`: Contains the tour details like price and name.
- `.description`: Displays the tour description with a **Read more** option.
- `.btn-red`: The "Not Interested" button for removing tours.
- `.button-white`: The refresh button when no tours are left.

## Contributing

Feel free to fork the project and make contributions. You can submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

Here are the screenshots which can be used to understand the code structure. 



![Screenshot 2024-10-11 002219](https://github.com/user-attachments/assets/03ab8791-f2c5-41b5-8fd0-1ac8d367d47b)
![Screenshot 2024-10-11 002239](https://github.com/user-attachments/assets/78334c0c-e8d9-4460-8a81-1d262b9e1feb)
![Screenshot 2024-10-11 002254](https://github.com/user-attachments/assets/48095937-8baa-4919-accf-1cf7b442d1d3)
![Screenshot 2024-10-11 002329](https://github.com/user-attachments/assets/cec9f575-3d70-44b1-901c-bd793190c332)
![Screenshot 2024-10-11 002348](https://github.com/user-attachments/assets/1069ddb3-ffda-4680-9805-c23a8028e89e)
