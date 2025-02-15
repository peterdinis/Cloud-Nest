import { DialogTitle } from "@/components/ui/dialog";
import { FC } from "react";
import { ModeToggle } from "../ModeToggle";
import { Label } from "@/components/ui/label";

const SettingsDialog: FC = () => {
    return (
        <>
            <DialogTitle className="text-center font-bold text-5xl">Settings</DialogTitle>
            <div className="w-full space-y-6">
                <div>
                    <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                        <Label className="text-xl font-bold">Dark Mode</Label>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsDialog;