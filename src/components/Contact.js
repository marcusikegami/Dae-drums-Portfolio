

const Contact = () => {
    const email = process.env.EMAIL || 'deseanbryant123@gmail.com';
    const phone = process.env.PHONE_NUMBER || '1-385-389-7766';

    return (
        <div id="contact" className="text-p flex flex-col items-center pt-10">
            <h1 className="font-bold text-lg sm:text-3xl text-darkpurple py-4">Contact</h1>
                <h3 className="text-sm sm:text-xl font-medium py-2 ">Email:</h3>
                <h4 className="hover:CLRLTR"><a className="text-md text-darkpurple hover:text-magenta" href="mailto:abandnamedshrine@gmail.com">{email}</a></h4>

                <h3 className="text-sm sm:text-xl font-medium py-2 ">Phone:</h3>
                <h4 className="hover:CLRLTR"><a  className="underline underline-offset-4 text-md text-darkpurple hover:text-magenta" href="tel:+1-385-389-7766">{phone}</a></h4>
        </div>
    )
};

export default Contact;