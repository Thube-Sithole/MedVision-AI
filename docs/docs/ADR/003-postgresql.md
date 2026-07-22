# ADR-003: PostgreSQL as the Primary Database

## Status

Accepted

---

## Context

MedVision AI is designed as a cloud-native medical imaging platform for
AI-assisted surgical planning and patient-specific medical device workflows.

The application receives surgical planning requests from hospitals and surgeons.
Each request represents a planning case that contains metadata describing the
patient, procedure, imaging modality and associated planning files.

Typical planning cases include:

- Mandibular reconstruction
- Orthognathic surgery
- Cranioplasty
- Patient-specific TMJ replacement
- Orbital reconstruction
- Maxillary reconstruction

A planning case is expected to reference one or more datasets such as:

- CT DICOM studies
- MRI studies (optional)
- Intraoral scans (optional)
- STL models
- Surgical planning outputs
- Generated planning reports

Initially the application returned request data directly from memory.
This meant that all information was lost whenever the application restarted.

A persistent database layer became necessary.

---

## Decision

PostgreSQL has been selected as the primary relational database for
MedVision AI.

The application will store each planning case as a row within the
`planning_cases` table.

Each case is assigned a unique primary key and can be queried,
updated and deleted independently.

---

## Why PostgreSQL?

PostgreSQL was selected because it provides:

- ACID compliant transactions
- Excellent reliability
- Strong SQL standards compliance
- Scalability from development to production
- Native support for complex queries
- Excellent compatibility with SQLAlchemy
- Industry adoption across healthcare, finance and enterprise software

Because MedVision AI is intended to evolve into a production platform,
starting with PostgreSQL avoids the need to migrate away from a lightweight development database later.

---

## Why not SQLite?

SQLite is an excellent embedded database for small applications.

However MedVision AI is expected to support:

- Multiple users
- Large datasets
- Future authentication
- Cloud deployment
- File metadata
- AI workflows
- Potential concurrent access

PostgreSQL is better suited for these long-term requirements.

---

## Relationship with SQLAlchemy

Although MedVision AI uses SQLAlchemy as its ORM,
the underlying database remains PostgreSQL.

The project intentionally retains SQL knowledge.

Understanding SQL provides:

- Better debugging
- Database optimisation
- Easier reporting
- Greater portability
- Better understanding of relational databases

SQLAlchemy is used to reduce repetitive boilerplate while allowing
raw SQL whenever appropriate.

---

## Consequences

Positive

- Persistent storage
- Structured relational data
- Easier future expansion
- Production-ready architecture
- Reliable transactions
- Strong integration with FastAPI

Trade-offs

- Additional database server required
- Slightly higher initial complexity
- ORM introduces another abstraction layer

These trade-offs are considered acceptable for a long-term production system.

---

## Future Work

Future milestones built on this decision include:

- Complete CRUD API
- User authentication
- Case assignment
- Planning status tracking
- DICOM indexing
- File storage
- AI inference pipelines
- Surgical planning history
- Audit logging

---

## Date

04 July 2026

---

## Milestone

This ADR marks the transition of MedVision AI from an in-memory prototype to a backend with persistent PostgreSQL storage.