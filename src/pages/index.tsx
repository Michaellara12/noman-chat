import DashboardLayout from "src/layouts/dashboard/DashboardLayout";

// ----------------------------------------------------------------------

Index.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Index() {
  return (
    <>
      <h1>Hi there</h1>
    </>
  )
}
