export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="border rounded-xl p-6 space-y-6">
        <div>
          <h2 className="font-semibold">
            Theme
          </h2>

          <select className="border rounded-lg p-3 mt-2">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <div>
          <h2 className="font-semibold">
            Notifications
          </h2>

          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}