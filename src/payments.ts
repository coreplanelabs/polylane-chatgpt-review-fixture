export async function payments() {
  await new Promise(resolve => setTimeout(resolve, 400));
  return { synthetic: true, database: "postgres-primary" };
}
