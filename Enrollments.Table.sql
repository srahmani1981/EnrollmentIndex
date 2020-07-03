USE [rahmani]
GO

/****** Object:  Table [dbo].[Enrollments]    Script Date: 7/3/2020 3:15:54 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Enrollments](
	[FirstName] [varchar](1000) NULL,
	[LastName] [varchar](1000) NULL,
	[BillingEnrollmentId] [varchar](1000) NULL,
	[iethicalid] [varchar](1000) NULL,
	[DateCreated] [varchar](1000) NULL,
	[BillingEnrollmentGUID] [varchar](1000) NULL,
	[DateUpdated] [varchar](1000) NULL,
	[LockBoxId] [varchar](1000) NULL,
	[UtilityAccountNumber] [varchar](1000) NULL,
	[PortfolioName] [varchar](1000) NULL
) ON [PRIMARY]
GO


