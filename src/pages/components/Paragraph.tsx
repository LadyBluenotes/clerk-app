export default function Paragraph({ children }: { children: React.ReactNode }) {
return (
    <p className="text-lg mt-2">
    {children}
    </p>
)
}