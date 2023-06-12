'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Becoming a Member of Developer DAO',
    desc: "By taking this course, you'll be able to gain access...",
    slug: 'ddmembership',
  },
  {
    id: 2,
    title: 'An Intro to Startups',
    desc: 'Learn all about Startups in this course...',
    slug: 'introstartups',
  },
];

export default function Courses() {
  const router = useRouter();
  return (
    <div>
      <h1>Courses</h1>

      <button onClick={() => router.push('/')}>Home</button>

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
