import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar component", () => {
    it("should render Calendar component correctly", () => {
        render(<Calendar date={new Date("2023-03-24")} />);
        expect(screen.getByText(/March 2023/)).toBeInTheDocument();
    });
});

describe("Calendar component date highlight", () => {
    it("should highlight date correctly", async () => {
        render(<Calendar date={new Date("2024-03-25")} />);
        const date = await screen.findAllByText(/25/)
        expect(date[0]).toHaveClass('bg-black text-white')
    });
});