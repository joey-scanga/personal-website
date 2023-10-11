export async function POST(request) {
  console.log(typeof request);
  req_obj = await request.json();
  console.log(typeof req_obj);
  console.log(
    JSON.stringify({
      time: new Date.toISOString(),
      name: req_obj.name,
      company: req_obj.company,
      email: req_obj.email,
      message: req_obj.message,
    })
  );
  return Response.json({ req_obj });
}
