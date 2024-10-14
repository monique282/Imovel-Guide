# Front-end Imóvel Guide

This is a Front-end Technical Test. It is intended to demonstrate skills.

## Challenge

The Front-End Technical Test consists of building: firstly, information from brokers, secondly, an option to send a message, thirdly, a small calculator that does the famous rule of three, fourthly, the option to open the image of the property, the fifth is the download option and the sixth and last is to open an animation of the property's images

### Technologies used

- `TypeScript`
- `Styled Components`
- `html2Canvas`

NPM package management was used.

### Layout Components

The first box contains the following information:

- Photo of the broker;
- Name;
- Points;
- View phone;


![Search Boxes](https://imgur.com/KQGA7n1.png)


When you click on view, the phone appears
![Search Boxes](https://imgur.com/gekLYqN.png)


The second is to send a message:

- CPF;
- Phone;
- Mesage;
- Send message

To be an accepted CPF it must contain 11 digits
![Search Boxes](https://imgur.com/csKMo2T.png)


Need an existing/valid CPF
![Search Boxes](https://imgur.com/46KTIqd.png)


The phone number must be at least 10 digits long to be accepted
![Search Boxes](https://imgur.com/BcIqMJd.png)


It had to contain a subject with more than 4 characters
![Search Boxes](https://imgur.com/wKc0UuF.png)


The third is a simple rule of three calculator:

- 1° field;
- 2° field;
- 3° field;
- 4° field result;
- Calculate
- To clean

You fill in the first 3 fields and click on the calculate button
![Search Boxes](https://imgur.com/xPBEiG6.png)


After clicking on calculate the result will appear in the fourth field
![Search Boxes](https://imgur.com/eRZkEdm.png)


When you click on clear all fields will be cleared to make a new calculation
![Search Boxes](https://imgur.com/tcH1ss3.png)


The fourth field is for viewing the image of the
![Search Boxes](https://imgur.com/dquhttps://github.com/BeMobile/desafio-front-endVG2N.png)

After clicking on 'open image in modal' a window appears with the image, when you click on the 'x' the screen closes.
![Search Boxes](https://imgur.com/sBrjeLT.png)

The fifth one is for downloading the image
![Search Boxes](https://imgur.com/WPNJTq9.png)

After clicking on Download the image is downloaded
![Search Boxes](https://imgur.com/Sq06sps.png)

The box shows an image, which when clicked will show an animation
![Search Boxes](https://imgur.com/jHWnSUu.png)

The animation
[Search Boxes - Video](https://va.media.tumblr.com/tumblr_rj8vo6R1Sp1y8elyf_720.mp4)

### Commands to Run the Project


To use a mock API and to access the data that will feed the project and run it, do the following:

1. Clone this GitHub repository to your machine: [git@github.com:monique282/Imovel-Guide.git](https://github.com/monique282/Imovel-Guide);
2. In another terminal, run the `npm install`, command to install all libraries.
5. Use the .env.example file to create the .env .
6. Run the `npm run dev`, command to run the project. This command provides a link from which you can open in your browser to interact with the project.

```
Remembering, all the commands above must be given in the folder that corresponds to the project.
```
