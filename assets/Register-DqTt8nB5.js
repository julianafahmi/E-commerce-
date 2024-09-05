import{r as d,u as g,c as b,j as e,a as h,d as x,e as a,f as p}from"./index-B1FgG9Im.js";function y(){d.useEffect(()=>{},[]);let[l,t]=d.useState(null),[o,n]=d.useState(!1),m=g();function i(c){t(null),n(!0),h.post("https://ecommerce.routemisr.com/api/v1/auth/signup",c).then(s=>{let{data:u}=s;console.log(u.message,"data message"),u.message=="success"&&m("/login")}).catch(s=>{t(s.response.data.message),n(!1)}),data.message=="success",console.log(data)}let r=b({initialValues:{name:"",email:"",password:"",rePassword:"",phone:""},validationSchema:()=>x({name:a().min(3,"not less than 3").max(10,"not max than 10").required("Required"),email:a().email("Invalid Email").required("Required"),password:a().matches(/^[A-Z][a-z0-9]{3,8}$/).required("Required"),rePassword:a().oneOf([p("password")]).required("Required"),phone:a().matches(/^[01][0125][0-9]{8}$/,"invalid").required("Required")}),onSubmit:i});return e.jsxs(e.Fragment,{children:[l&&e.jsx("div",{className:"max-w-lg mt-5 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:l})}),e.jsxs("form",{className:"max-w-lg mt-5 mx-auto",onSubmit:r.handleSubmit,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your name"}),e.jsx("input",{type:"text",id:"name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"enter your name"})]}),r.errors.name&&r.touched.name?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.name})}):null,e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),e.jsx("input",{type:"email",id:"email",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"})]}),r.errors.email&&r.touched.email?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.email})}):null,e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your password"}),e.jsx("input",{type:"password",id:"password",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.password,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"enter your password"})]}),r.errors.password&&r.touched.password?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.password})}):null,e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"rePassword",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your repassword"}),e.jsx("input",{type:"password",id:"rePassword",name:"rePassword",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.rePassword,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"renter your password"})]}),r.errors.rePassword&&r.touched.rePassword?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.rePassword})}):null,e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"phone",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your phone"}),e.jsx("input",{type:"number",id:"phone",name:"phone",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.phone,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"enter your phone"})]}),r.errors.phone&&r.touched.phone?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.phone})}):null,e.jsxs("button",{disabled:o,type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[o?e.jsx("i",{className:"fa fa-spinner fa-spin"}):"Submit"," "]})]})]})}export{y as default};
