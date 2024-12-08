# Blang

## Introduction
Welcome to the **Blang**! This is a programming language where programs are created using colored images. The flow of execution is controlled by color transitions, making this an artistic and unique approach to coding.

## Project Structure
- **`index.html`**: The main HTML file for the website interface, including the code editor, tutorial, and command reference.
- **`style.css`**: The CSS file for styling the website.
- **`script.js`**: General JavaScript functionality for the website (e.g., UI interactions).
- **`interpreter.js`**: The interpreter script for parsing the image and executing the program based on color transitions.

## Getting Started
### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- **Krita** or any image editor that allows pixel-level editing.

### Installation
1. Clone or download the project repository.
2. Open `index.html` in your web browser to view and use the code editor.

### Creating Your First Piet Program
1. **Use Krita or an Image Editor**:
   - Create a new document (e.g., 32x32 pixels).
   - Use the pixel grid to ensure precise color placement.
   - Draw the code using the color palette specified in the **Color Sheet** section.

2. **Color Transitions**:
   - Refer to the **Command Reference** to understand how color transitions translate to commands.
   - Use different colors for different commands (e.g., red to blue for increment, blue to green for print).

3. **Save and Upload**:
   - Save the image in PNG or JPEG format.
   - Upload the image using the code editor on the website.

4. **Run Your Program**:
   - Click the **Run** button to see the output in the output panel.

## Tutorial
### Creating Your First Piet Program
1. **Choose a Drawing Tool**: Use an image editor like Krita to create your code.
2. **Define Color Transitions**: Arrange the colors based on the color sheet to form the logic of your program.
3. **Save the Image**: Save your image as a PNG or JPEG file.
4. **Upload and Run**: Upload your image using the website and click **Run**.

For more detailed instructions, see the tutorial section on the website.

## Command Reference
| Color Transition  | Command Description          |
|-------------------|------------------------------|
| Red to Blue       | Increment a variable         |
| Blue to Green     | Print an ASCII character     |
| Green to Yellow   | Start a loop or conditional  |
| Yellow to Red     | End a loop or conditional    |
| Orange to Red     | Decrement the value          |
| Purple to Pink    | Move left                    |
| Pink to Purple    | Move right                   |
| Gray to Gray      | No operation (empty space)   |

## How to Contribute
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements
- Inspired by the Piet esolang concept.
- Thanks to the Krita community for their pixel art capabilities.

## Contact
For questions or feedback, please contact [your email address].

---

Happy coding and enjoy creating unique programs with the Piet-based esolang!
