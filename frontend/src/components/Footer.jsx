import { MapPin, Mail, Phone } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-[#1f2d3a] text-gray-300 pt-14">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-12">

                {/* COLUMN 1 */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Why New Ukhra Youth Computer Training Centre?
                    </h3>

                    <ul className="space-y-2 text-sm leading-6">
                        <li>• Providing Computer Education since 2008</li>
                        <li>• Experienced & Skilled Teachers</li>
                        <li>• Affordable Course Fees</li>
                        <li>• Monthly Installment Facility</li>
                        <li>• Regular Exams & Certifications</li>
                        <li>• Extra Classes for Weak Students</li>
                    </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Contact Us
                    </h3>

                    <div className="space-y-3 text-sm">

                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-orange-400 mt-1" />
                            <span>
                                Near New Sannyasi Kali Mandir, Ananda More,
                                MG Rd, Ukhra, West Bengal 713363
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-orange-400" />
                            <span>info@nuyctc.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-orange-400" />
                            <span>9749616555 / 9732081768</span>
                        </div>

                    </div>
                </div>

                {/* COLUMN 3 - GOOGLE MAP */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Our Location
                    </h3>

                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Institute Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.6876314696701!2d87.24889441970383!3d23.649103736056464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76b6365710abb%3A0x9bd065b6c07926a!2sNew%20Ukhra%20Youth%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1772080433618!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                    </div>
                </div>

            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="bg-[#16202a] text-center py-4 text-sm text-gray-400">
                © 2026 New Ukhra Youth Computer Training Centre | All Rights Reserved
            </div>

        </footer>
    );
}

export default Footer;