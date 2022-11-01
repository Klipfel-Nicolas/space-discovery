export const elementsPerseverance = [
    {
        name:'head',
        positions: {
            x:.86,
            y:1.97,
            z:-.38
        },
        description: "The head is composed of NavCams, MastCam-Z and SuperCam",
        more: "- NavCams : Two color stereo Navigation Cameras help engineers navigate Perseverance safely, particularly when the rover operates autonomously, making its own navigation decisions without consulting controllers on Earth.<br><br>-MastCam-Z : Is the mast-mounted camera system that is equipped with a zoom function. It can zoom in, focus, and take 3D pictures and video at high speed to allow detailed examination of distant objects.<br><br>-SuperCam : This camera examines rocks and soils with a camera, laser and spectrometers to seek organic compounds that could be related to past life on Mars. It can identify the chemical and mineral makeup of targets as small as a pencil point from a distance of more than 20 feet (7 meters)."
    },
    {
        name:'WATSON',
        positions: {
            x:.40,
            y:1.9,
            z:-1.9
        },
        description: "WATSON is a camera that acts as a magnifying lens to help SHERLOC see fine detail in rocks and soil.",
        more:"WATSON (Wide Angle Topographic Sensor for Operations and eNgineering) captures the images that bridge the scale from the very detailed images and maps that SHERLOC collects of Martian minerals and organics to the broader scales that SuperCam and Mastcam-Z observe from the mast.<br>WATSON provides views of the fine-scale textures and structures in Martian rocks and the rocky debris and dust that cover so much of the Martian surface. These capabilities mean WATSON not only supports SHERLOC, but also helps identify targets of interest for the other rover instruments. Since WATSON can be moved around by the robotic arm, it also provides images of instruments and rover parts.hh"
    },
    {
        name:'Wheels',
        positions: {
            x:1,
            y:.25,
            z:.8
        },
        description: "The wheels are made of aluminium, with cleats for traction and curved titanium spokes for springy support.",
        more:"The Perseverance rover has six wheels, each with its own individual motor.<br>The two front and two rear wheels also have individual steering motors. This steering capability allows the vehicle to turn in place, a full 360 degrees. The four-wheel steering also allows the rover to swerve and curve, making arcing turns.<ul><li>Materials : <span>Made of aluminum, with cleats for traction and curved titanium spokes for springy support.</span></li><li>Size : <span>52.5 centimeters (20.7-inches) in diameter</span> </li><li>Other : <span>One full turn of the wheels with no slippage drives the rover 1.65 meters (65-inches).</span></li></ul>"
    },
    {
        name:'Rover "Up-Look" Camera',
        positions: {
            x:.03,
            y:1.33,
            z:.71
        },
        description:"During landing, this camera watches the descent stage as it lowers the rover on the sky crane.",
        more: "These new eyes and ears of Perseverance were assembled from easily available commercial hardware. The cameras and microphone were flown as a \"discretionary payload\" – an optional add-on that would be an asset, but that wasn’t required for the mission.<br>Mounted on the backshell, looking upward at parachute deployment and inflation. Three cameras were installed, two of which successfully recorded the parachute."
    },
    {
        name:'Suspension',
        positions: {
            x:.9,
            y:.9,
            z:.2
        },
        description: "The ‘rocker-bogie’ suspension system allows the wheels to traverse uneven obstacles.",
        more:"The suspension system has three main components: <ul><li>Differential: <span>Connects to the left and right rockers and to the rover body by a pivot in the center of the rover's top deck.</span></li> <li>Rocker : <span> One each on the left and right side of the rover. Connects the front wheel to the differential and the bogie in the rear.</span></li> <li>Bogie : <span>Connects the middle and rear wheels to the rocker.</span></li></ul> When driving over the uneven Martian terrain, the suspension system maintains a relatively constant weight on each of the rover's wheels. The suspension also minimizes rover tilt as it drives, keeping it more stable.The rover's rocker-bogie suspension enables the rover to drive over obstacles (such as rocks) or through depressions that are as large as the rover's wheel (52.5-centimeters, 20.7-inches). Each wheel has an aggressive tread composed of 48-grousers (or cleats), machined into its surface. The grousers give the rover excellent traction when driving in both soft sand and on hard rocks.<br>Perseverance is designed to withstand a tilt of 45 degrees in any direction without tipping over. "
    },
    {
        name:'Corring Drill',
        positions: {
            x:.87,
            y:1.90,
            z:-2.05
        },
        description: "The drill is a rotary percussive drill to extract sample cores from rocks.",
        more: "The rover's drill will use rotary motion with or without percussion to penetrate into the Martian surface to collect the precious samples. The drill is equipped with three different kinds of attachments (bits) that facilitate sample acquisition and surface analysis. The coring and regolith bits are used to collect Martian samples directly into a clean sample collection tube, while the abrader bit is used to scrape off or \"abrade\" the top layers of rocks, to expose fresh, un-weathered surfaces for study. <br> The cylindrical drill cuts out samples from rock interiors, breaking off the rock sample at its base. Each sample is collected directly into a clean sample collection tube. The sample tubes are about the size of a penlight. Each collected core is 0.5 inches (13 millimeters) in diameter and 2.4 inches (60 millimeters) long, amounting to an average of 10-15 grams of Martian material per tube."
    },
    {
        name:'PIXL',
        positions: {
            x:.97,
            y:1.89,
            z:-1.73
        },
        description: "PIXL measures the chemical makeup of rocks at a very fine scale.",
        more: "The PIXL (Planetary Instrument for X-ray Lithochemistry) for the Perseverance rover is a microfocus X-ray fluorescence instrument that rapidly measures elemental chemistry at sub-millimeter scales by focusing an X-ray beam to a tiny spot on the target rock or soil and analyzing the induced X-ray fluorescence.<br>The instrument consists of a main electronics unit in the rover’s body and a sensor head mounted on the robotic arm. The sensor head includes an x-ray source, X-ray optics, X-ray detectors, and high-voltage power supply (HVPS), as well as a micro-context camera (MCC) and light-emitting diode (LED). "
    },
    {
        name:'UHF Antenna',
        positions: {
            x:-.10,
            y:1.64,
            z:1.19
        },
        description: "The Ultra-High Frequency Antenna transmits data to Earth using the Mars orbiters overhead.",
        more: "Most often, Mars 2020 uses its ultra-high frequency (UHF) antenna (about 400 megahertz) to communicate with Earth through NASA's orbiters around Mars.<br>Because the rover and orbiter antennas are within close range of each other, they act a little like walkie-talkies compared to the long-range telecommunications with Earth provided by the low-gain and high-gain antennas.<br>It generally takes about 5 to 20 minutes for a radio signal to travel the distance between Mars and Earth, depending on planet positions. Using orbiters to relay messages is beneficial because they are much closer to Perseverance than the Deep Space Network (DSN) antennas on Earth.<br>The mass- and power-constrained rover can achieve high data rates of up to 2 megabits per second on the relatively short-distance relay link to the orbiters overhead. The orbiters then use their much larger antennas and transmitters to relay that data on the long-distance link back to Earth."
    },
    {
        name:'High-Gain Antenna',
        positions: {
            x:-.55,
            y:1.28,
            z:.13
        },
        description: "This antenna transmits and receives data directly to and from Earth.",
        more: "The high-gain antenna is steerable so it can point its radio beam in a specific direction. The benefit of having a steerable antenna is that the entire rover doesn't need to change position to talk to Earth, which is always moving in the Martian sky. Like turning your neck to talk to someone beside you rather than turning your entire body, the rover can save energy and keep things simple by moving only the antenna. Its high gain allows it to focus its beam, allowing higher data rates on the long link back to Earth."
    },
    {
        name:'Low-Gain Antenna',
        positions: {
            x:-.89,
            y:1.50,
            z:.56
        },
        description: "This antenna primarily receives data from Earth.",
        more: "Mars 2020 uses its low-gain antenna primarily for receiving signals.<br>This antenna can send and receive information in every direction; that is, it is \"omni-directional.\" <br>The antenna transmits at low data rate to the Deep Space Network antennas on Earth. Because it doesn’t need to be pointed, it provides a robust way to always communicate with the rover.<br>Reception rates : Approximately 10 bits per second or faster from the Deep Space Network's 112-foot-diameter (34-meter-diameter) antennas or approximately 30 bits per second or faster from the Deep Space Network's 230-foot-diameter (70-meter-diameter) antenna"
    },
    {
        name:'Rear Hazcams',
        positions: {
            x: -.98,
            y:0.77,
            z:.75
        },
        description: "The Rear Hazard Avoidance Cameras aid in driving, can operate autonomously and avoid obstacles.",
        more:"Perseverance carries six newly developed Hazard Detection Cameras, called HazCams: four on the front and two on the rear of the rover body.<br>HazCams detect hazards to the front and back pathways of the rover, such as large rocks, trenches, or sand dunes. Engineers also use the front HazCams to see where to move the robotic arm to take measurements, photos, and collect rock and soil samples.When driving, the rover stops frequently to take new stereo images of the path ahead to evaluate potential hazards. The 3D views give Mars 2020 the ability to make its own decisions about where to drive without consulting on every move with the rover team on Earth."
    },
    {
        name:'Name Chips',
        positions: {
            x: -.45,
            y:1.45,
            z:.78
        },
        description: "Three tiny silicon chips carry 10.9 billion names submitted by the public.",
        more: "NASA's \"Send Your Name to Mars\" campaign invited people around the world to submit their names to ride aboard the agency's next rover to the Red Planet. Some 10,932,295 people did just that. The names were stenciled by electron beam onto three fingernail-sized silicon chips, along with the essays of the 155 finalists in NASA's \"Name the Rover\" contest. The chips were then were attached to an aluminum plate on NASA's Perseverance Mars rover at Kennedy Space Center in Florida on March 16. Scheduled to launch this summer, Perseverance will land at Jezero Crater on Feb. 18, 2021."
    },
    {
        name:'Front Hazcams',
        positions: {
            x: .55,
            y:0.72,
            z:-.80
        },
        description:"The Hazard Avoidance Cameras aid in driving, can operate autonomously and avoid obstacles.",
        more: "Perseverance carries six newly developed Hazard Detection Cameras, called HazCams: four on the front and two on the rear of the rover body. HazCams detect hazards to the front and back pathways of the rover, such as large rocks, trenches, or sand dunes.<br>Engineers also use the front HazCams to see where to move the robotic arm to take measurements, photos, and collect rock and soil samples.<br>When driving, the rover stops frequently to take new stereo images of the path ahead to evaluate potential hazards. The 3D views give Mars 2020 the ability to make its own decisions about where to drive without consulting on every move with the rover team on Earth."
    },
    {
        name:'Rover "Down-Look" Camera',
        positions: {
            x: -.22,
            y:0.77,
            z:-.90
        },
        description: "This camera watches the ground on the dramatic ride to the surface.",
        more:"These new eyes and ears of Perseverance were assembled from easily available commercial hardware. The cameras and microphone were flown as a \"discretionary payload\" – an optional add-on that would be an asset, but that wasn’t required for the mission.<br>Mounted on the descent stage, looking downward at the rover as it was lowered during the skycrane maneuver<ul><li><span>Main job :</span>Take pictures, looking down, during descent and landing on Mars</li><li><span>Location :</span> Mounted on various parts of the spacecraft, including the backshell, descent stage, and rover</li></ul>"
    },
    {
        name:'Power Source',
        positions: {
            x:-.62,
            y:1.15,
            z:1.08
        },
        description: "A Multi-Mission Radioisotope Thermoelectric Generator Provides electrical power to the rover.",
        more:"Perseverance's power system works essentially like a nuclear battery. The MMRTG converts heat from the natural radioactive decay of plutonium-238 into a steady flow of electricity. The power system will reliably produce about 110 watts (similar to a light bulb) at the start of Perseverance's mission, declining a few percent each year in a very predictable way. The MMRTG doesn't just power the rover; excess heat from it keeps the rover's tools and systems at their correct operating temperatures."
    },
    {
        name:'Sample Handling',
        positions: {
            x: .42,
            y:1.13,
            z:-.68
        },
        description: "The system is used to collect and store compelling rock and soil samples.",
        more: "The Perseverance rover will gather samples from Martian rocks and soil using its drill. The rover will then store the sample cores in tubes on the Martian surface. This entire process is called \"sample caching\".<br>Mars 2020 will be the first mission to demonstrate this on Mars. It could potentially pave the way for future missions that could collect the samples and return them to Earth for intensive laboratory analysis."
    },

]
