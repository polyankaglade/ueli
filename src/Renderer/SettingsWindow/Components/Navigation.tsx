import { Tab, TabList } from "@fluentui/react-components";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SettingsRoute } from "../SettingsRoute";

type Props = {
    routes: SettingsRoute[];
};

export const Navigation: FC<Props> = ({ routes }) => {
    const [selectedValue, setSelectedValue] = useState<string>(routes[0].path);
    const navigate = useNavigate();

    useEffect(() => navigate("/"), []);

    const navigateTo = (url: string) => {
        setSelectedValue(url);
        navigate(url);
    };

    return (
        <TabList
            vertical
            selectedValue={selectedValue}
            onTabSelect={(_event, { value }) => {
                if (typeof value === "string") {
                    navigateTo(value);
                }
            }}
        >
            {routes.map(({ label, path }, index) => (
                <Tab key={`${label}-${path}-${index}`} value={path}>
                    {label}
                </Tab>
            ))}
        </TabList>
    );
};