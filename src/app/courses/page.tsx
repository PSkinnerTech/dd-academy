import { courses } from '@/data/courses';
import Link from 'next/link';

export default function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <Link href="/">Home</Link>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.desc}</p>
          <Link href={`/courses/${course.slug}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  // neet to fetch data from external
  // It should be server side rendered
  return courses.map((course) => course.slug);
}
