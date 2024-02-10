# Xerocodee Frontend Assignment 💻
A functional and responsive landing page made using Next JS and Tailwind CSS.

It adherently follows the following Figma design: [Figma](https://www.figma.com/file/3zjvXOcNHbo7G1my0lKHVC/Frontend-Hiring?type=design&node-id=0%3A1&mode=design&t=zocDQsfSHKzXInOs-1)

## Live Demo 👨‍💻

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://xerocodee-frontend-task.vercel.app/)

The project is deployed using Vercel and is live at [TechSynergy](https://xerocodee-frontend-task.vercel.app/). Check it out !!

## Tech Stack 👩‍🔧

[![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)[![image]( 	https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

I have chosen Next Js 14.1.0 as the frontend framework for our project and used Tailwind CSS to make up all the page's styles and components. The code language is Typescript & I have used the popular testing framework Jest to test the website using several cases. Further, I sourced some two to three components from Next UI.


## Design Approach ⚡️

✅ App router approach has been applied for our project with the sections of the landing page separated into different components.  
✅ To favour maintainability and readability, I have extracted the content and models away from the components.  
✅ The ``` src/common ``` folder contains all the types/models and data, which are imported as needed.  
✅ Tailwind classes are followed systematically to give a coherent feel to the page. Screen-size modifiers ```lg | md``` are utilized for responsive adaptation to the screen size.  
✅ ```src/static``` folder contains all the images & SVGs used in the project.  
✅ As least as possible repetition has been targeted. 

## Testing 🛠️

- A total of 23 Tests in 11 Test Suites have been written to comprehensively test the site using Jest 29.7.0.
- Tests cover the display checks of all the major contents & images in components, navbar and footer.
- Interactive elements like button scroll, input fields & responsive behaviour have also been tested.
- All the tests are in ```__tests__``` folder inside the root directory.


<a href="https://drive.google.com/uc?export=view&id=1qO9oN6Xmkr9HRkwedbfnSNgJYjtGceK7"><img src="https://drive.google.com/uc?export=view&id=1qO9oN6Xmkr9HRkwedbfnSNgJYjtGceK7" style="width: 500px; max-width: 100%; height: auto" title="Comprehensive tests using jest" />
  
## Page Load Time ⏰

<a href="https://drive.google.com/uc?export=view&id=1RMl-8kDCfEEXGopy8RVMzSq_c4EtU3f-"><img src="https://drive.google.com/uc?export=view&id=1RMl-8kDCfEEXGopy8RVMzSq_c4EtU3f-" style="width: 500px; max-width: 100%; height: auto" title="speed tests using lighthouse" />

I measured the load times of the website using Google Lighthouse. The performance ratings were good and the content load time ranged between 0.3s to 0.8s for the desktop.

## Challenges Faced 🏋️

Overall, I enjoyed the task. I found the task to be easy but time-consuming. Still, these are some small hurdles I faced:-  
- Handling the little quirks of the UI & the differences between the desktop and mobile views.
- Writing meaningful tests to judge the site.

## Final Words 😊

Hope you would have liked my work and commitment. I would love to get the feedback and suggestions on my coding practices. Thank you.

Made with ❤️ & ⚡ by Yash Raj
##


## Running on Local Machine

Clone the repo first and then run the development server through:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

