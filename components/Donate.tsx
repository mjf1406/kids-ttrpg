import KofiDonation from "./brands/Kofi";
import PatreonDonation from "./brands/Patreon";

export default function Donate() {
    return (
        <>
            <h2 className="text-2xl font-semibold">Donations</h2>
            <div className="flex flex-col justify-center items-center gap-5 max-w-lg">
                <div>
                    We have spent a lot of time on this game and website. If you
                    have gotten any use out of it, please consider donating via
                    any of the below methods.
                </div>
                <div className="flex gap-5 justify-center items-center flex-wrap">
                    <KofiDonation />
                    <PatreonDonation />
                </div>
            </div>
        </>
    );
}
